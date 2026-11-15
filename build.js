// Simple Zero-Dependency Bundler for Standalone Offline Execution
const fs = require('fs');
const path = require('path');

const syllabiCode = fs.readFileSync(path.join(__dirname, 'data', 'defaultSyllabi.js'), 'utf8')
  .replace(/export const /g, 'const ');

const storageCode = fs.readFileSync(path.join(__dirname, 'js', 'storage.js'), 'utf8')
  .replace(/import\s*\{[^}]*\}\s*from\s*['"][^'"]*['"];?/g, '')
  .replace(/export const storage =/g, 'const storage =');

const recsCode = fs.readFileSync(path.join(__dirname, 'js', 'recommendations.js'), 'utf8')
  .replace(/export function calculateTopicRecommendations/g, 'function calculateTopicRecommendations');

const timerCode = fs.readFileSync(path.join(__dirname, 'js', 'timer.js'), 'utf8')
  .replace(/import\s*\{[^}]*\}\s*from\s*['"][^'"]*['"];?/g, '')
  .replace(/export class RevisionTimer/g, 'class RevisionTimer')
  .replace(/export function getExamCountdown/g, 'function getExamCountdown');

const appCode = fs.readFileSync(path.join(__dirname, 'js', 'app.js'), 'utf8')
  .replace(/import\s*\{[^}]*\}\s*from\s*['"][^'"]*['"];?/g, '');

const bundle = `/**
 * Cambridge International A-Level Revision Tracker & Smart Guide
 * Standalone Offline Bundle (Works directly with file:// and http://)
 */
(function() {
  'use strict';

  // --- 1. DEFAULT SYLLABI ---
  ${syllabiCode}

  // --- 2. STORAGE ENGINE ---
  ${storageCode}

  // --- 3. RECOMMENDATIONS ENGINE ---
  ${recsCode}

  // --- 4. TIMER & COUNTDOWN ENGINE ---
  ${timerCode}

  // --- 5. APPLICATION CONTROLLER ---
  ${appCode}
})();
`;

fs.writeFileSync(path.join(__dirname, 'js', 'bundle.js'), bundle, 'utf8');
console.log('Successfully generated js/bundle.js (' + Buffer.byteLength(bundle) + ' bytes)');
