const assert = require('assert')
const each = require('async/eachLimit')
const legit = require('legit')
const list = require('../index.json')

const max_parallel = 500

describe('valid domain', () => {
  each(list, max_parallel, (name, cb) => {
    it(name, (done) => {
      legit('test@' + name, function (valid) {
        assert(valid)
        cb(done())
      })
    })
  })
})

