const fs = require('fs');
const path = require('path');

const srcDirectory = path.join(__dirname, 'src');

const replacements = {
  // Replace Dark Blue branding with Light Blue branding (#00AEEF is the logo's light blue)
  '#24469A': '#00AEEF',
  '#1E60B8': '#38BDF8',
  '#17306D': '#0092C8',
  '#173D68': '#0369A1',
};

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  fs.readdir(dirPath, function (err, files) {
    if (err) return console.log('Unable to scan directory: ' + err);
    
    files.forEach(function (file) {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        processDirectory(filePath);
      } else if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        for (const [key, value] of Object.entries(replacements)) {
          // Case-insensitive regex for the hex codes
          const regex = new RegExp(key.replace('#', '#'), 'gi');
          if (regex.test(content)) {
            content = content.replace(regex, value);
            modified = true;
          }
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Updated ${filePath}`);
        }
      }
    });
  });
}

processDirectory(srcDirectory);
