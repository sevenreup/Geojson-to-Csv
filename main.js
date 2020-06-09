const fs = require('fs');
const {featureParser} = require('./util/parser');

let data = fs.readFileSync('./json/mzimba.geojson');
let json = JSON.parse(data);

let features = json.features;
let final = [];

features.forEach(element => {
    const newFeature = featureParser(element);
    final.push(newFeature)
});

const file = fs.createWriteStream('./data/mzimba.csv', { flags: 'w'})

final.forEach(el => {
    file.write(`${el}\n`);
});

file.end();

// console.log(final);
