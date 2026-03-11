import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://127.0.0.1:3000';
const label = process.argv[3] || '';
const dir = path.join(path.dirname(new URL(import.meta.url).pathname), 'temporary screenshots');

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// Find next screenshot number
const existing = fs.readdirSync(dir).filter(f => f.startsWith('screenshot-'));
let num = 1;
for (const f of existing) {
  const m = f.match(/^screenshot-(\d+)/);
  if (m) num = Math.max(num, parseInt(m[1]) + 1);
}

const filename = label ? `screenshot-${num}-${label}.png` : `screenshot-${num}.png`;
const filepath = path.join(dir, filename);

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
const width = parseInt(process.argv[4]) || 1440;
await page.setViewport({ width, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
const wait = parseInt(process.argv[5]) || 5000;
await new Promise(r => setTimeout(r, wait));

// Scroll through the page to trigger IntersectionObserver-based animations
await page.evaluate(async () => {
  const distance = 400;
  const delay = 100;
  const scrollHeight = document.body.scrollHeight;
  let currentPosition = 0;
  while (currentPosition < scrollHeight) {
    window.scrollBy(0, distance);
    currentPosition += distance;
    await new Promise(r => setTimeout(r, delay));
  }
  // Scroll back to top for the final screenshot
  window.scrollTo(0, 0);
  await new Promise(r => setTimeout(r, 500));
});

await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Saved: ${filepath}`);
