const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  await page.goto('http://localhost:4322/', { 
    waitUntil: 'networkidle0',
    timeout: 30000 
  });
  
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Scroll to stats section
  console.log('Scrolling to stats section...');
  await page.evaluate(() => {
    window.scrollTo(0, 2900);
  });
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await page.screenshot({ 
    path: 'typography-stats.png',
    fullPage: false
  });
  
  await browser.close();
  console.log('Done! Stats screenshot saved.');
})();
