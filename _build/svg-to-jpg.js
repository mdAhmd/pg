// Renders the vector artwork in _build/svg-src to JPG files in assets/img (needs Playwright + Chrome).
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, 'svg-src'), out = path.join(__dirname, '..', 'assets', 'img');
(async () => {
  const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  const jobs = [['hero.svg', 'hero.jpg', 1600, 900], ...fs.readdirSync(path.join(src, 'gallery')).map(f => ['gallery/' + f, 'gallery/' + f.replace('.svg', '.jpg'), 800, 600])];
  for (const [i, o, w, h] of jobs) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    await p.goto('file://' + path.join(src, i));
    await p.waitForTimeout(150);
    await p.screenshot({ path: path.join(out, o), type: 'jpeg', quality: 82 });
    await p.close();
  }
  await b.close(); console.log('rendered', jobs.length);
})();
