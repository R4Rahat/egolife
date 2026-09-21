const fs = require('fs');
const path = require('path');

// 1. Update Navbar.jsx
let fNavbar = path.join(__dirname, 'src/components/layout/Navbar.jsx');
let cNavbar = fs.readFileSync(fNavbar, 'utf8');
cNavbar = cNavbar.replace(/{ to: "\/government", label: "Government" }/g, '{ to: "/partner", label: "Partner" }');
fs.writeFileSync(fNavbar, cNavbar, 'utf8');

// 2. Update Footer.jsx
let fFooter = path.join(__dirname, 'src/components/layout/Footer.jsx');
let cFooter = fs.readFileSync(fFooter, 'utf8');
cFooter = cFooter.replace(/"Government",/g, '"Partner",');
// Address in footer
cFooter = cFooter.replace(
`                1/09, Vikrant Khand, Gomti Nagar
                <br />
                Lucknow – 226010
                <br />
                Uttar Pradesh, India`,
`                Entire Northeast, India`
);
fs.writeFileSync(fFooter, cFooter, 'utf8');

// 3. Update App.jsx
let fApp = path.join(__dirname, 'src/App.jsx');
let cApp = fs.readFileSync(fApp, 'utf8');
cApp = cApp.replace(/path="\/government"/g, 'path="/partner"');
cApp = cApp.replace(/title="Government Solutions"/g, 'title="Partner Solutions"');
fs.writeFileSync(fApp, cApp, 'utf8');

console.log("Navbar and Footer updated successfully.");
