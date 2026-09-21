const fs = require('fs');
const path = require('path');

const srcDirectory = path.join(__dirname, 'src');

const replacements = {
  // Background Gradients
  'from-\\[#0D1629\\]': 'from-[#E0F2FE]',
  'via-\\[#14203A\\]': 'via-[#BAE6FD]',
  'to-\\[#1C2C4E\\]': 'to-[#7DD3FC]',
  
  // Specific text color inversion in these dark components
  'text-white': 'text-[#10182C]',
  'border-white/10': 'border-[#7DD3FC]/50',
  'border-white/15': 'border-[#7DD3FC]/60',
  'bg-white/5': 'bg-white/60',
  'bg-white/10': 'bg-white/70',
  
  // Muted text colors
  'text-\\[#9BB1C9\\]': 'text-[#4B6179]',
  'text-\\[#A0B3CC\\]': 'text-[#4B6179]',
  'text-\\[#8DA2BC\\]': 'text-[#4B6179]',
  'text-\\[#889EBA\\]': 'text-[#4B6179]',
  
  // If there are specific background colors that were solid dark blue
  'bg-\\[#0D1629\\]': 'bg-[#E0F2FE]',
  'bg-\\[#14203A\\]': 'bg-[#BAE6FD]',
  'bg-\\[#1C2C4E\\]': 'bg-[#7DD3FC]',
  
  // Footer colors (typically dark)
  'bg-\\[#0D1930\\]': 'bg-[#F0F7FF]',
  'text-\\[#526B84\\]': 'text-[#4B6179]',
  
  // Contact Info colors
  'text-\\[#F58220\\]': 'text-[#00AEEF]', // If they want full light blue theme, maybe orange stays? Let's leave orange as it is a good accent, but let's change text-white.
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
        
        // We only want to aggressively replace text-white in files that had the dark backgrounds
        const hasDarkBackground = content.includes('#0D1629') || content.includes('#14203A') || content.includes('#1C2C4E') || content.includes('#0D1930');
        
        if (hasDarkBackground) {
          for (const [key, value] of Object.entries(replacements)) {
             // For text-white, ensure we only replace class="... text-white ..."
             let regex;
             if (key === 'text-white' || key.startsWith('bg-white') || key.startsWith('border-white')) {
                 regex = new RegExp(`(?<=[\\s"'\\\`])${key}(?=[\\s"'\\\`\\/])`, 'g');
             } else {
                 regex = new RegExp(key, 'g');
             }
             
             if (regex.test(content)) {
                content = content.replace(regex, value);
                modified = true;
             }
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
