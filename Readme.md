# disposable-email-domains

  A list of [disposable email domains](http://en.wikipedia.org/wiki/Disposable_email_address) like `mailinator.com`. You can use it to detect or block disposable accounts in your signup process.

## Example

```js
var domains = require('disposable-email-domains');
```
```js
[
  "0-mail.com",
  "0815.ru",
  "0clickemail.com",
  "mailinator.com"
  // ..
]
```

## Installation
  
```
$ npm install disposable-email-domains
```
```
$ component install ivolo/disposable-email-domains
```

## Contributing

Add new disposable domains in the [index.json](https://github.com/ivolo/disposable-email-domains/blob/master/index.json) in alphabetical order and lowercase. Please run `mocha` before creating a Pull Request to ensure all tests are passing.

## License

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
