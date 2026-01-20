#!/usr/bin/env node
// Build script for Vercel - replaces API key placeholder
const fs = require('fs');
const path = require('path');

try {
  const envConfigPath = path.join(process.cwd(), 'public', 'env-config.js');
  console.log('[build] cwd:', process.cwd());
  console.log('[build] envConfigPath:', envConfigPath);
  console.log('[build] GEMINI_API_KEY present:', Boolean(process.env.GEMINI_API_KEY));
  
  if (!fs.existsSync(envConfigPath)) {
    console.error('[build] env-config.js not found at', envConfigPath);
    // Don't fail the build; deploy can still succeed and show a clear runtime error.
    process.exit(0);
  }
  
  let content = fs.readFileSync(envConfigPath, 'utf8');

  // Replace placeholder with actual environment variable
  const apiKey = process.env.GEMINI_API_KEY || '';
  
  if (!apiKey) {
    console.warn('Warning: GEMINI_API_KEY environment variable is not set');
  }
  
  content = content.replace('%%GEMINI_API_KEY%%', apiKey);

  fs.writeFileSync(envConfigPath, content);
  console.log('Environment config updated successfully!');
} catch (error) {
  console.error('[build] Build script error:', error && error.stack ? error.stack : error);
  // Don't fail the whole deploy; we prefer a deploy + visible runtime error.
  process.exit(0);
}
