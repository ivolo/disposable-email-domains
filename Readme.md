# disposable-email-domains

A list of [disposable email domains](http://en.wikipedia.org/wiki/Disposable_email_address) like `mailinator.com`. You can use it to detect or block disposable accounts in your signup process. Exact domain matches are found in [index.json](https://github.com/ivolo/disposable-email-domains/blob/master/index.json) and wildcard domains (ex: `*.33mail.com`) are in [wildcard.json](https://github.com/ivolo/disposable-email-domains/blob/master/wildcard.json).

# Examples

## Node.JS
```js
var domains = require('disposable-email-domains');
var wildcards = require('disposable-email-domains/wildcard.json');

// ... your code here
```

## API

An always-up-to-date version of this repo is provided as an API by [Kickbox](https://kickbox.com/). Issuing a `GET` request to https://open.kickbox.com/v1/disposable/{DomainOrEmailAddress} will return `{"disposable":true}` or `{"disposable":false}` as a JSON response.

```
https://open.kickbox.com/v1/disposable/mailinator.com

{"disposable":true}
```

# Installation
  
```
$ npm install disposable-email-domains
```
```
$ component install ivolo/disposable-email-domains
```

# Contributing

Add new disposable domains to [index.json](https://github.com/ivolo/disposable-email-domains/blob/master/index.json) and wildcard disposable domains to [wildcard.json](https://github.com/ivolo/disposable-email-domains/blob/master/wildcard.json).  

To easily add new domains, insert them into [index.txt](https://github.com/ivolo/disposable-email-domains/blob/master/contributions/index.txt) and/or [wildcard.txt](https://github.com/ivolo/disposable-email-domains/blob/master/contributions/wildcard.txt) and run `npm run add`.  
The domains will be added to the respective files and some validation will be made to ensure they pass the tests.

Please run `npm run test` before creating a Pull Request to ensure all tests are passing.

You can also run `npm run prod` to add new domains and run the tests at the same time.

# License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

THE SOFTWARE IS PROVIDED "AS IS" AND "AS AND WHEN AVAILABLE", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
