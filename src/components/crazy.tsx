'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Crazy = () => {
  return (
    <div className="mx-auto w-full p-6">
      <div className="mb-4">
        <h2 className="text-foreground text-2xl font-semibold md:text-3xl text-primary">
          Fun Fact
        </h2>
      </div>
      <p className="text-neutral-400 font-sans text-lg">
        I once spent 4 days straight debugging a custom memory allocator in C, only to realize I was off-by-one in my pointer arithmetic. That's when I fell in love with Operating Systems.
      </p>
    </div>
  );
};

export default Crazy;