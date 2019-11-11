<h1 align="center">
  <div align="center">
    <img src="https://avatars2.githubusercontent.com/u/37938941?s=400&u=b7a61cbf6b9686cb78d50258213b256159dbb7af&v=4" height="200" width="200"/>
  </div>
  <div align="center">
    Octaform - Additional validations
  </div>
</h1>

Octaform helps developers validate forms in an easy way, being completely agnostic to framework, you can use anywhere you want.

## Getting Started
This package is an additional that enable you to add pre-set validations, if you are searching for `Octaform Validate` please access the official documentation [https://github.com/octaform/octaform](https://github.com/octaform/octaform)

Install using `yarn`:
```
yarn add octaform-additional
```

Or via `npm`:
```
npm install octaform-additional --save
```

After install import the `octaform-additional` and start to use:

```js
import Octaform from 'octaform';
import { email, extension } from 'octaform-additional';

// Add the validations object into array
Octaform.validator.add([
  email,
  extension
])
```

`OR`

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
email             | Only valid emails                                     | `email: true`
extension         | Only valid file extensions, e.g. `png`, `jpg`         | `extension: ['png', 'jpg']`
letter            | Only letters is accepted `[A-Z]`                      | `letter: true`
number            | Only numbers is accepted `[0-9]`                      | `number: true`
minlength         | Define minlength from text                            | `minlength: 3`
maxlength         | Define maxlength from text                            | `maxlength: 12`
maxsize `(bytes)` | Define maximum upload size                            | `maxsize: 50000`
minchecked        | Define minimum of checked checkboxes                  | `minchecked: 2`
required          | Make that the field be required                       | `required: true`
valueEquals       | Require a value to be the same as the predefined      | `valueEquals: 'Dog'`
valueNotEquals    | Define one value that shouldn't be equal              | `valueNotEquals: 'Dog'`
url               | Require a valid url                                   | `url: true`
range             | Require a given value range                           | `range: [5, 8]`
equalTo           | Requires the field to have the same value as another  | `equalTo: <HTML_Attribute or ID>`
pattern           | Requires a value in regex format                      | `pattern: ^[0-9]+$`

## Demo
See the validations working on our demo page: https://octaform.github.io

## Changelog

[Check out releases](https://github.com/octaform/octaform-additional/releases)

## License

[The MIT License (MIT)](/LICENSE)

Copyright (c) 2019 Christian Fortes
