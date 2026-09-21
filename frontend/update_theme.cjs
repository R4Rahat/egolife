const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'src/components/about'),
  path.join(__dirname, 'src/components/contact'),
  path.join(__dirname, 'src/components/common'),
  path.join(__dirname, 'src/components/services'),
  path.join(__dirname, 'src/pages')
];

const replacements = {
  // Backgrounds
  'bg-white': 'bg-black',
  'bg-\\[#F8FAFC\\]': 'bg-zinc-900',
  'bg-\\[#F4F7FC\\]': 'bg-zinc-900',
  'bg-\\[#F1F5F9\\]': 'bg-zinc-900',
  'bg-\\[#FAFCFF\\]': 'bg-zinc-950',
  'bg-\\[#F2F5FB\\]': 'bg-zinc-900',
  'bg-\\[#EBFBF0\\]': 'bg-zinc-900',
  'bg-\\[#24469A\\]': 'bg-[#00AEEF]',
  'bg-\\[#17306D\\]': 'bg-cyan-900',
  
  // Texts
  'text-\\[#10182C\\]': 'text-white',
  'text-\\[#4B6179\\]': 'text-zinc-400',
  'text-\\[#5A6F87\\]': 'text-zinc-400',
  'text-\\[#64748B\\]': 'text-zinc-400',
  'text-\\[#5B6F84\\]': 'text-zinc-400',
  'text-\\[#334155\\]': 'text-zinc-300',
  'text-\\[#24469A\\]': 'text-[#00AEEF]',
  'text-\\[#F58220\\]': 'text-[#00AEEF]',
  
  // Borders
  'border-\\[#E2E8F0\\]': 'border-zinc-800',
  'border-\\[#EAEEF4\\]': 'border-zinc-800',
  'border-\\[#EDF2F7\\]': 'border-zinc-800',
  'border-\\[#24469A\\]': 'border-[#00AEEF]',
  
  // Gradients
  'from-\\[#F8FAFC\\]': 'from-zinc-900',
  'to-white': 'to-black',
  'from-white': 'from-black',
  'to-\\[#F8FAFC\\]': 'to-zinc-900',
  'from-\\[#24469A\\]': 'from-[#00AEEF]',
  'to-\\[#17306D\\]': 'to-cyan-900',
};

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  fs.readdir(dirPath, function (err, files) {
    if (err) return console.log('Unable to scan directory: ' + err);
    
    files.forEach(function (file) {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        processDirectory(filePath); // Recursive for nested dirs if any
      } else if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        for (const [key, value] of Object.entries(replacements)) {
          const regex = new RegExp(key, 'g');
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

directories.forEach(processDirectory);
