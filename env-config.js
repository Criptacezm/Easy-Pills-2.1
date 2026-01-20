// This file injects environment variables at runtime
// Vercel will replace %%GEMINI_API_KEY%% with the actual value during build
// You can also manually set this for local development

window.__GEMINI_API_KEY__ = "%%GEMINI_API_KEY%%";
