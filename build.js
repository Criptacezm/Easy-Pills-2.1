// Build script for Vercel - replaces API key placeholder
const fs = require('fs');
const path = require('path');

const envConfigPath = path.join(__dirname, 'env-config.js');
let content = fs.readFileSync(envConfigPath, 'utf8');

// Replace placeholder with actual environment variable
const apiKey = process.env.GEMINI_API_KEY || '';
content = content.replace('%%GEMINI_API_KEY%%', apiKey);

fs.writeFileSync(envConfigPath, content);
console.log('Environment config updated successfully!');
