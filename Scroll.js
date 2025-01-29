// Scroll.js
import fs from 'fs';
import path from 'path';

// Get current directory path
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Define the directory to scan
const dir = path.join(__dirname, 'dist');

function removeScrollSmoother(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);

    if (fs.statSync(fullPath).isDirectory()) {
      removeScrollSmoother(fullPath);  // Recursively call for subdirectories
    } else if (fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes('ScrollSmoother')) {
        content = content.replace(/ScrollSmoother/g, '');
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`Removed ScrollSmoother from ${fullPath}`);
      }
    }
  });
}

removeScrollSmoother(dir);
