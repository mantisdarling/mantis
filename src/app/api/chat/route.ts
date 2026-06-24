import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getCrazy } from './tools/getCrazy';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getSkills } from './tools/getSkills';

export const maxDuration = 30;

// ❌ Pas besoin de l'export ici, Next.js n'aime pas ça
function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);

    messages.unshift(SYSTEM_PROMPT);

    const tools = {
      getProjects,
      getPresentation,
      getContact,
      getSkills,
      getCrazy,
    };

    const result = streamText({
      model: groq('llama-3.1-8b-instant'),
      messages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
      maxTokens: 400,
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    console.error('Global error:', err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
