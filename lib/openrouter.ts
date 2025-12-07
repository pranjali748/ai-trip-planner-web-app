import OpenAI from "openai";

export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY, // NEVER export this
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000", 
    "X-Title": "AI Trip Planner",
  },
});
