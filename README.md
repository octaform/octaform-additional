<h1 align="center">
  <p align="center" style="margin-bottom:0">
    <img src="https://avatars2.githubusercontent.com/u/37938941?s=400&u=b7a61cbf6b9686cb78d50258213b256159dbb7af&v=4" height="200" width="200"/>
  </p>
  <p align="center">Octaform - Additional validations</p>
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
import { email, extension } from 'octaform-additional';

// Add the validations object into array
Octaform.validator.add([
  email,
  extension
])
```

`OR`
```js
import VALIDATIONS from 'octaform-additional';

// Add the validations object into array
Octaform.validator.add([
  VALIDATIONS.email,
  VALIDATIONS.extension
])

```

## Available validations

Validations       | Description                                       | How to use
------------------|---------------------------------------------------|--------------------
email             | Only valid emails                                 | `email: true`
extension         | Only valid file extensions, e.g. `png`, `jpg`     | `extension: ['png', 'jpg']`
letter            | Only letters is accepted `[A-Z]`                  | `letter: true`
number            | Only numbers is accepted `[0-9]`                  | `number: true`
minlength         | Define minlength of text                          | `minlength: 3`
maxlength         | Define maxlength of text                          | `maxlength: 12`
maxsize `(bytes)` | Define the max size of files                      | `maxsize: 50000`
minchecked        | Define the minimun of checkboxes checked          | `minchecked: 2`
required          | Make that the field be required                   | `required: true`
valueNotEquals    | Define one value that shouldn't be equal          | `valueNotEquals: 'Dog'`

## Demo
See the validations working on our demo page: https://octaform.github.io/demo

## Changelog

[Check out releases](https://github.com/octaform/octaform-additional/releases)

## License

[The MIT License (MIT)](/LICENSE.md)

Copyright (c) 2018 Christian Fortes
