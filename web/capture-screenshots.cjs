const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to a desktop size
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log('Navigating to http://localhost:4322/...');
  await page.goto('http://localhost:4322/', { 
    waitUntil: 'networkidle0',
    timeout: 30000 
  });
  
  // Wait a bit for any animations or lazy loading
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Get the full page height
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`Page height: ${bodyHeight}px`);
  
  // Take initial screenshot (hero section)
  console.log('Capturing screenshot 1: Hero section');
  await page.screenshot({ 
    path: 'screenshot-1-hero.png',
    fullPage: false
  });
  
  // Scroll and capture more sections
  const viewportHeight = 1080;
  let currentScroll = 0;
  let screenshotNum = 2;
  
  // Calculate number of screenshots needed
  const numScreenshots = Math.ceil(bodyHeight / viewportHeight);
  
  for (let i = 1; i < numScreenshots; i++) {
    currentScroll += viewportHeight * 0.8; // 80% overlap for continuity
    
    console.log(`Scrolling to ${currentScroll}px`);
    await page.evaluate((scrollY) => {
      window.scrollTo(0, scrollY);
    }, currentScroll);
    
    // Wait for content to settle
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(`Capturing screenshot ${screenshotNum}`);
    await page.screenshot({ 
      path: `screenshot-${screenshotNum}-scroll.png`,
      fullPage: false
    });
    
    screenshotNum++;
  }
  
  // Also capture a full-page screenshot
  console.log('Capturing full-page screenshot');
  await page.screenshot({ 
    path: 'screenshot-full-page.png',
    fullPage: true
  });
  
  // Get page structure for analysis
  const pageStructure = await page.evaluate(() => {
    const sections = [];
    
    // Try to identify sections by common patterns
    const elements = document.querySelectorAll('section, div[class*="section"], main > div, header, footer');
    
    elements.forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(el);
      
      sections.push({
        index: idx,
        tagName: el.tagName,
        className: el.className,
        id: el.id,
        position: {
          top: rect.top + window.scrollY,
          height: rect.height,
          width: rect.width
        },
        backgroundColor: computedStyle.backgroundColor,
        textContent: el.textContent?.substring(0, 100) + '...'
      });
    });
    
    return {
      title: document.title,
      bodyHeight: document.body.scrollHeight,
      sections: sections
    };
  });
  
  // Save structure to file
  fs.writeFileSync('page-structure.json', JSON.stringify(pageStructure, null, 2));
  console.log('Page structure saved to page-structure.json');
  
  await browser.close();
  console.log('Done! Screenshots saved.');
})();
