const { writeFileSync } = require('fs')

const index = require('./index.json').sort()
const wildcard = require('./wildcard.json').sort()

writeFileSync('index.json', JSON.stringify(index, null, 2))
writeFileSync('wildcard.json', JSON.stringify(wildcard, null, 2))
