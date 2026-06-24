// src/components/chat/chat-bottombar.tsx
'use client';

import { ChatRequestOptions } from 'ai';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FastfolioTracking } from '@/lib/fastfolio-tracking';

interface ChatBottombarProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  isLoading: boolean;
  stop: () => void;
  input: string;
  isToolInProgress: boolean;
  disabled?: boolean;
}

export default function ChatBottombar({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
  isToolInProgress,
  disabled = false,
}: ChatBottombarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [remainingMessages, setRemainingMessages] = useState(0);
  
  useEffect(() => {
    // Update remaining messages count
    setRemainingMessages(FastfolioTracking.getRemainingMessages());
  }, [input]); // Update when input changes (user is typing)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      !e.nativeEvent.isComposing &&
      !isToolInProgress &&
      input.trim()
    ) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full pb-2 md:pb-5"
    >
      <form onSubmit={handleSubmit} className="relative w-full md:px-4">
        <div className="mx-auto flex items-center rounded-full border border-border bg-card py-2 pr-2 pl-6 focus-within:border-primary/50 transition-colors">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder={
              disabled ? '' : isToolInProgress ? 'Tool is in progress...' : 'Ask me anything'
            }
            className={`text-md w-full border-none bg-transparent placeholder:text-muted-foreground focus:outline-none ${
              disabled ? 'text-muted-foreground font-medium' : 'text-foreground'
            }`}
            disabled={isToolInProgress || isLoading || disabled}
          />

          <button
            type="submit"
            disabled={isLoading || !input.trim() || isToolInProgress || disabled}
            className="flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 p-2 text-primary-foreground disabled:opacity-50 transition-colors"
            onClick={(e) => {
              if (isLoading) {
                e.preventDefault();
                stop();
              }
            }}
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
