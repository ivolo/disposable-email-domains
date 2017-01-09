const _ = require('lodash');
const domains = require('../index.json');
const chai = require('chai');
const expect = chai.expect;
const isFQDN = require('validator').isFQDN;

chai.use(require("chai-sorted"));

/*
  Check if all the elements are in lowercase
*/
chai.Assertion.addProperty('lowercase', function () {
  var obj = this._obj, _this = this;
  obj.forEach(function(o){
    _this.assert(
        o === o.toLowerCase()
      , 'expected "' + o + '" to be all lowecase'
      , 'expected "' + o + '" to not be all lowecase'
    );
  });

});

/*
  Check if all the elements are valid domains
*/
chai.Assertion.addProperty('isFQDN', function () {
  var obj = this._obj, _this = this;
  obj.forEach(function(o){
    _this.assert(
        isFQDN(o)
      , 'expected "' + o + '" to be a valid domain'
      , 'expected "' + o + '" to not be all lowecase'
    );
  });

});

describe('Domains', function(){
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