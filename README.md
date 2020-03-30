<h1 align="center">
  <div align="center">
    <img src="https://avatars2.githubusercontent.com/u/37938941?s=400&u=b7a61cbf6b9686cb78d50258213b256159dbb7af&v=4" height="200" width="200"/>
  </div>
  <div align="center">
    Octaform <br />Additional validations
  </div>
</h1>

**Octaform Additional** is a package that provides you a pre-set of validation. To know more about the Octaform Validation Core please check out the official documentation in [https://github.com/octaform/octaform](https://github.com/octaform/octaform)

## Getting Started

Install using `yarn`:
```
yarn add octaform-additional
```

Or via `npm`:
```
npm install octaform-additional --save
```

After installed import the `octaform-additional` together with the `Octaform` and start to use:

```js
import Octaform from 'octaform';
import validation from 'octaform-additional';

// Add the validations object into array
Octaform.validator.add([
  validation.email,
  validation.extension
])

```

## Available validations

Validations       | Description                                           | How to use
------------------|-------------------------------------------------------|--------------------
date              | Given a date validate the format `( / | - | . |  )`   | `date: MM/DD/YYYY | M/D/YY`
email             | Only valid emails                                     | `email: true`
equalTo           | Requires the field to have the same value as another  | `equalTo: <HTML_Attribute or ID>`
extension         | Only valid file extensions, e.g. `png`, `jpg`         | `extension: ['png', 'jpg']`
letter            | Only letters is accepted `[A-Z]`                      | `letter: true`
maxlength         | Define maxlength from text                            | `maxlength: 12`
maxsize `(bytes)` | Define maximum upload size                            | `maxsize: 50000`
minchecked        | Define minimum of checked checkboxes                  | `minchecked: 2`
minlength         | Define minlength from text                            | `minlength: 3`
number            | Only numbers is accepted `[0-9]`                      | `number: true`
pattern           | Requires a value in regex format                      | `pattern: ^[0-9]+$`
range             | Require a given value range                           | `range: [5, 8]`
required          | Make that the field be required                       | `required: true`
url               | Require a valid url                                   | `url: true`
valueEquals       | Require a value to be the same as the predefined      | `valueEquals: 'Dog'`
valueNotEquals    | Define one value that shouldn't be equal              | `valueNotEquals: 'Dog'`

## Demo
Take a look at the validations in the demo page: https://octaform.github.io

## Changelog

[Check out releases](https://github.com/octaform/octaform-additional/releases)

## License

[The MIT License (MIT)](/LICENSE)

Copyright (c) 2020 Christian Fortes
