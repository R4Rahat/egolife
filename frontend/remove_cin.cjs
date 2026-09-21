const fs = require('fs');
const path = require('path');

// 1. TrustSignals.jsx
let f1 = path.join(__dirname, 'src/components/home/TrustSignals.jsx');
let c1 = fs.readFileSync(f1, 'utf8');
c1 = c1.replace(/"CIN: U72900AS2021PTC022087",\r?\n?/g, '');
fs.writeFileSync(f1, c1, 'utf8');

// 2. Hero.jsx
let f2 = path.join(__dirname, 'src/components/home/Hero.jsx');
let c2 = fs.readFileSync(f2, 'utf8');
c2 = c2.replace(/<div className="inline-flex items-center gap-1\.5 rounded-full border border-theme-accent\/20 bg-theme-bg px-3\.5 py-1 text-xs font-semibold text-theme-accent shadow-xs">[\s\S]*?<span>CIN: U72900AS2021PTC022087<\/span>[\s\S]*?<\/div>\r?\n?/g, '');
fs.writeFileSync(f2, c2, 'utf8');

// 3. GovermentExperience.jsx
let f3 = path.join(__dirname, 'src/components/home/GovermentExperience.jsx');
let c3 = fs.readFileSync(f3, 'utf8');
c3 = c3.replace(/\(CIN: U72900AS2021PTC022087\) /g, '');
fs.writeFileSync(f3, c3, 'utf8');

// 4. CorporateValues.jsx
let f4 = path.join(__dirname, 'src/components/services/CorporateValues.jsx');
let c4 = fs.readFileSync(f4, 'utf8');
c4 = c4.replace(/CIN: U72900AS2021PTC022087\. /g, '');
fs.writeFileSync(f4, c4, 'utf8');

// 5. ContactHero.jsx
let f5 = path.join(__dirname, 'src/components/contact/ContactHero.jsx');
let c5 = fs.readFileSync(f5, 'utf8');
c5 = c5.replace(/<div className="inline-flex items-center gap-1\.5 rounded-full border border-theme-accent\/20 bg-theme-bg px-3\.5 py-1 text-xs font-semibold text-theme-accent shadow-xs">[\s\S]*?<span>CIN: U72900AS2021PTC022087<\/span>[\s\S]*?<\/div>\r?\n?/g, '');
fs.writeFileSync(f5, c5, 'utf8');

// 6. CredentialsBar.jsx
let f6 = path.join(__dirname, 'src/components/services/CredentialsBar.jsx');
let c6 = fs.readFileSync(f6, 'utf8');
c6 = c6.replace(/{\s*icon: Award,[\s\S]*?label: "CIN: U72900AS2021PTC022087",[\s\S]*?desc: "Govt of India Registered",\s*},\s*/g, '');
fs.writeFileSync(f6, c6, 'utf8');

// 7. ContactInfo.jsx
let f7 = path.join(__dirname, 'src/components/contact/ContactInfo.jsx');
let c7 = fs.readFileSync(f7, 'utf8');
c7 = c7.replace(/<div className="mt-8 pt-8 border-t border-theme-border">[\s\S]*?CIN: U72900AS2021PTC022087[\s\S]*?<\/div>\r?\n?/g, '');
// Alternatively just replace the text if the block contains other stuff:
// We should check what's inside ContactInfo.jsx. I will just read ContactInfo.jsx manually below.
// Let's replace just the text for now:
c7 = c7.replace(/CIN: U72900AS2021PTC022087/g, '');
fs.writeFileSync(f7, c7, 'utf8');

// 8. ServicesHero.jsx
let f8 = path.join(__dirname, 'src/components/services/ServicesHero.jsx');
let c8 = fs.readFileSync(f8, 'utf8');
c8 = c8.replace(/<div className="inline-flex items-center gap-1\.5 rounded-full border border-theme-accent\/20 bg-theme-bg px-3\.5 py-1 text-xs font-semibold text-theme-accent shadow-xs">[\s\S]*?<span>CIN: U72900AS2021PTC022087<\/span>[\s\S]*?<\/div>\r?\n?/g, '');
fs.writeFileSync(f8, c8, 'utf8');

console.log("CIN removed");
