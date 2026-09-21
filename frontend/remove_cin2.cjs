const fs = require('fs');
const path = require('path');

function removeCIN(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove "CIN: U72900AS2021PTC022087" entirely
    // And if it's inside quotes, maybe remove the whole string if it's an array element.
    
    // For CredentialsBar.jsx specifically:
    content = content.replace(/{\s*icon: Shield,\s*label: "CIN: U72900AS2021PTC022087",\s*sub: "Registrar of Companies",\s*},/g, '');
    
    // For TrustSignals.jsx
    content = content.replace(/"CIN: U72900AS2021PTC022087",?/g, '');
    
    // For ContactFAQ.jsx
    content = content.replace(/\(CIN: U72900AS2021PTC022087\)/g, '');
    content = content.replace(/CIN: U72900AS2021PTC022087/g, '');
    
    // For ContactInfo.jsx
    content = content.replace(/CIN: U72900AS2021PTC022087/g, '');

    fs.writeFileSync(filePath, content, 'utf8');
}

const files = [
    'src/components/home/TrustSignals.jsx',
    'src/components/home/GovermentExperience.jsx',
    'src/components/contact/ContactFAQ.jsx',
    'src/components/services/CorporateValues.jsx',
    'src/components/services/CredentialsBar.jsx',
    'src/components/contact/ContactInfo.jsx',
    'src/components/services/ServicesCatalog.jsx'
];

files.forEach(f => {
    removeCIN(path.join(__dirname, f));
});
