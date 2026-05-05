const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE_CONSOLE', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGE_ERROR', err.stack || err.toString()));
  page.on('requestfailed', req => console.log('PAGE_REQUESTFAILED', req.url(), req.failure()?.errorText));
  await page.goto('http://localhost:4200/', { waitUntil: 'networkidle' });
  console.log('TITLE', await page.title());
  console.log('BODY', await page.locator('body').innerHTML().slice(0,1000));
  await browser.close();
})();