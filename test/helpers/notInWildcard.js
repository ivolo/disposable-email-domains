var wildcard = require('../../wildcard');
const _ = require('lodash');

/*
  Check if all the elements are in lowercase
*/
module.exports = function (chai) {
    chai.Assertion.addProperty('notInWildcard', function () {
      this._obj.forEach(domain => {
        if (new RegExp(/(.+(?:\.[\w-]+\.[\w-]+)+)$/).test(domain)) {
          wildcard.forEach(wildcard => {
            this.assert(
              ! _.endsWith(domain, wildcard)
              , '"' + domain + '" is already in the wildcard list'
            );
          })
        }
      });
    });
};
