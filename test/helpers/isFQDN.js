const isFQDN = require('validator').isFQDN;

/*
  Check if all the elements are valid domains
*/
module.exports = function (chai) {
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
};
