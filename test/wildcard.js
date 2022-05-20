const _ = require('lodash');
const domains = require('../wildcard');
const chai = require('chai');
const expect = chai.expect;

chai.use(require("chai-sorted"));
chai.use(require('./helpers/lowercase'));
chai.use(require('./helpers/isFQDN'));

describe('Wildcard domains', function(){
  it('should be an array', function(){
    expect(domains).to.be.a('array');
  });
  it('should have at least one domain', function(){
    expect(domains).to.have.length.above(0);
  });
  it('should be in alphabetical order', function(){
    expect(domains).to.be.sorted();
  });
  it('should not have duplicates', function(){
    expect(domains).to.deep.equal(_.uniq(domains));
  });
  it('should be lowercase', function(){
    expect(domains).to.be.all.lowercase;
  });
  it('should be a valid domain', function(){
    expect(domains).to.be.all.isFQDN;
  });
});
