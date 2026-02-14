const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to desktop size
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log('Navigating to http://localhost:4322/...');
  await page.goto('http://localhost:4322/', { 
    waitUntil: 'networkidle0',
    timeout: 30000 
  });
  
  // Wait for page to fully load
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Screenshot 1: Hero section at the top
  console.log('Capturing hero section...');
  await page.screenshot({ 
    path: 'typography-hero.png',
    fullPage: false
  });
  
  // Scroll to show problem section and program grid
  console.log('Scrolling to problem and program sections...');
  await page.evaluate(() => {
    window.scrollTo(0, 1200);
  });
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await page.screenshot({ 
    path: 'typography-problem-program.png',
    fullPage: false
  });
  
  // Get computed font information
  const fontInfo = await page.evaluate(() => {
    const heading = document.querySelector('.hero h1, h1');
    const quote = document.querySelector('em, i, [class*="highlight"]');
    const stats = document.querySelectorAll('.stat-number, [class*="stat"]');
    
    const getComputedFont = (element) => {
      if (!element) return null;
      const style = window.getComputedStyle(element);
      return {
        fontFamily: style.fontFamily,
        fontWeight: style.fontWeight,
        fontStyle: style.fontStyle,
        letterSpacing: style.letterSpacing,
        fontSize: style.fontSize
      };
    };
    
    return {
      heading: getComputedFont(heading),
      headingText: heading?.textContent?.trim(),
      quote: getComputedFont(quote),
      quoteText: quote?.textContent?.trim(),
      statsCount: stats.length
    };
  });
  
  console.log('Font information:', JSON.stringify(fontInfo, null, 2));
  
  await browser.close();
  console.log('Done! Screenshots saved as typography-hero.png and typography-problem-program.png');
})();
