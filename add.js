const { writeFileSync, readFileSync } = require('fs')
const _ = require('lodash')

var index = require('./index')
var wildcard = require('./wildcard')

// Add new domains
const newDomains = readFileSync('./contributions/index.txt').toString().split("\n").filter(d => d)
index = _.concat(index, newDomains)

const newWildcardDomains = readFileSync('./contributions/wildcard.txt').toString().split("\n").filter(d => d)
wildcard = _.concat(wildcard, newWildcardDomains)

// Remove empty strings
index = index.filter(d => d)
wildcard = wildcard.filter(d => d)

// Lowercase
index = index.map(domain => { return _.toLower(domain) })
wildcard = wildcard.map(domain => { return _.toLower(domain) })

// Sort
index.sort()
wildcard.sort()

// Dedupe
index = _.uniq(index)
wildcard = _.uniq(wildcard)

// Remove wildcards
var regexp = new RegExp(/(.+(?:\.[\w-]+\.[\w-]+)+)$/)

index = index
    .filter(domain => {
        if (regexp.test(domain)) {
            return ! wildcard.filter(wildcard => {
                return _.endsWith(domain, wildcard)
            }).length
        }
        return true
    })

writeFileSync('index.json', JSON.stringify(index, null, 2))
writeFileSync('wildcard.json', JSON.stringify(wildcard, null, 2))
