/*
  Check if all the elements are in lowercase
*/
module.exports = function (chai) {
    chai.Assertion.addProperty('lowercase', function () {
      var obj = this._obj, _this = this;
      obj.forEach(function(o){
        _this.assert(
            o === o.toLowerCase()
          , 'expected "' + o + '" to be all lowercase'
          , 'expected "' + o + '" to not be all lowercase'
        );
      });
    });
};
