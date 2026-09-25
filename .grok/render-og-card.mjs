import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { join } from "node:path";

const html = pathToFileURL(join("/workspace/.grok/og-card.html")).href;
const outPng = "/workspace/.grok/card-raw.png";

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2,
  });
  await page.goto(html, { waitUntil: "networkidle", timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(200);
  await page.screenshot({ path: outPng, type: "png", omitBackground: false });
  console.log(JSON.stringify({ ok: true, html, screenshot: outPng }));
} catch (err) {
  console.error(JSON.stringify({ ok: false, error: String(err?.message || err) }));
  process.exitCode = 1;
} finally {
  await browser.close();
}
