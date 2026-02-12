const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'src', 'pages');
const PARTIALS_DIR = path.join(__dirname, 'src', 'partials');
const OUTPUT_DIR = path.join(__dirname, 'public');

const partialCache = {};

function getPartial(name) {
  if (!partialCache[name]) {
    const filePath = path.join(PARTIALS_DIR, name);
    partialCache[name] = fs.readFileSync(filePath, 'utf8');
  }
  return partialCache[name];
}

function buildPage(fileName) {
  let content = fs.readFileSync(path.join(PAGES_DIR, fileName), 'utf8');
  content = content.replace(/<!-- include:(\S+) -->/g, (_, partialName) => getPartial(partialName));
  fs.writeFileSync(path.join(OUTPUT_DIR, fileName), content, 'utf8');
  console.log(`  Built: ${fileName}`);
}

const pages = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));
console.log(`Building ${pages.length} pages...`);
pages.forEach(buildPage);
console.log('Done.');
