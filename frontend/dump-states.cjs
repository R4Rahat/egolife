const { getAllStates, getDistrictsByState } = require('india-states-districts');
const fs = require('fs');

const states = getAllStates();
const data = {};

for (const state of states) {
    data[state] = getDistrictsByState(state);
}

const content = `// Auto-generated states and districts data
export const statesData = ${JSON.stringify(data, null, 2)};

export const getAllStates = () => Object.keys(statesData);
export const getDistrictsByState = (state) => statesData[state] || [];
`;

fs.writeFileSync('src/data/statesAndDistricts.js', content, 'utf8');
console.log('Successfully generated statesAndDistricts.js');
