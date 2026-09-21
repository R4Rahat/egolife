const fs = require('fs');
const path = require('path');

const srcDirectory = path.join(__dirname, 'src');

const replacements = {
  // Backgrounds
  'bg-black': 'bg-theme-bg',
  'bg-zinc-950': 'bg-theme-bg',
  'bg-zinc-900': 'bg-theme-card',
  'bg-zinc-800': 'bg-theme-card-hover',
  'bg-\\[#00AEEF\\]': 'bg-theme-accent',
  
  // Texts
  'text-white': 'text-theme-text-main',
  'text-zinc-400': 'text-theme-text-muted',
  'text-zinc-300': 'text-theme-text-muted',
  'text-\\[#00AEEF\\]': 'text-theme-accent',
  
  // Borders
  'border-zinc-800': 'border-theme-border',
  'border-zinc-900': 'border-theme-border',
  'border-\\[#00AEEF\\]': 'border-theme-accent',
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
          // Add word boundary checks to avoid replacing bg-black/50 with bg-theme-bg/50
          // Actually bg-theme-bg/50 is valid in Tailwind! It will parse transparency correctly!
          // So a simple regex is fine. Let's make sure not to replace already semantic tags if we run twice.
          // e.g. text-white in from-white might be matched if not careful, but we only have exact class prefixes here.
          // Wait, 'text-white' could match inside another string. We should use regex that respects class boundaries.
          // regex: (?<=[\s"'\`])bg-black(?=[\s"'\`\/])
          // Let's use a simpler one:
          const regex = new RegExp(`(?<=[\\s"'\\\`])` + key + `(?=[\\s"'\\\`\\/])`, 'g');
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
