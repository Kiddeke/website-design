// Renders brand/capability-statement.html to public/files/full-clear-capability-statement.pdf
// (one US Letter page). Needs Playwright with Chromium; run: node brand/build-capability-statement.js
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  const src = path.join(__dirname, 'capability-statement.html');
  const out = path.join(__dirname, '..', 'public', 'files', 'full-clear-capability-statement.pdf');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + src, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: out, format: 'Letter', printBackground: true, preferCSSPageSize: true });
  await browser.close();
  console.log('Wrote ' + out);
})();
