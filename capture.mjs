import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1800, deviceScaleFactor: 2 });
  await page.goto(`file://${__dirname}/index.html`);
  await page.screenshot({ path: `${__dirname}/poster.png`, type: 'png', fullPage: true });

  await page.goto(`file://${__dirname}/street-poster.html`);
  await page.screenshot({ path: `${__dirname}/poster-v2.png`, type: 'png', fullPage: true });
  await browser.close();
})();
