#!/usr/bin/env node
// Build script for Vercel - replaces API key placeholder
const fs = require('fs');
const path = require('path');

try {
  const envConfigPath = path.join(process.cwd(), 'public', 'env-config.js');
  
  if (!fs.existsSync(envConfigPath)) {
    console.error('Error: env-config.js not found at', envConfigPath);
    process.exit(1);
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
  console.error('Build script error:', error.message);
  process.exit(1);
}
