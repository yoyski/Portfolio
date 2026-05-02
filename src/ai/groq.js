// src/ai/groq.js
// -----------------------------------------------------------
// Groq client for browser (fetch-based, no Node.js SDK needed)
// Set your API key in .env as VITE_GROQ_API_KEY
// NEVER hardcode your key here — it will leak in your git repo
// -----------------------------------------------------------

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";

export const groq = {
  chat: {
    completions: {
      create: async ({ model, messages, temperature, max_completion_tokens, top_p, stop }) => {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model,
            messages,
            temperature: temperature ?? 1,
            max_tokens: max_completion_tokens ?? 8192,
            top_p: top_p ?? 1,
            stop: stop ?? null,
          }),
        });

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err?.error?.message || `Groq API error: ${response.status}`);
        }

        return response.json();
      },
    },
  },
};