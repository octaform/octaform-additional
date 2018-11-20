<h1 align="center">
  <img src="https://avatars2.githubusercontent.com/u/37938941?s=400&u=b7a61cbf6b9686cb78d50258213b256159dbb7af&v=4" height="200" width="200"/>
  <p align="center">Octaform - Additional validations</p>
</h1>

Octaform helps developers validate forms in an easy way, being completely agnostic to framework, you can use anywhere you want.

## Getting Started
This package is an additional package that enables you to add some pre-set validations, if you are searching for Octaform Validate please access the official documentation [https://github.com/octaform/octaform](https://github.com/octaform/octaform)

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

Validations       | Description                                             | Namespace       | How to use
------------------|---------------------------------------------------------|-----------------|--------------------
Email             | Only valid emails                                       | email           | `email: true`
Extension         | Only valid file extensions, e.g. `png`, `jpg`           | extension       | `extension: ['png', 'jpg']`
Letter            | Only letters is accepted `[A-Z]`                        | letter          | `letter: true`
Number            | Only numbers is accepted `[0-9]`                        | number          | `number: true`
MinLength         | Define minlength of text                                | minlength       | `minlength: 3`
MaxLength         | Define maxlength of text                                | maxlength       | `maxlength: 12`
MaxSize `(bytes)` | Define the max size of files                            | maxsize         | `maxsize: 50000`
MinChecked        | Define the minimun of checkboxes checked                | minchecked      | `minchecked: 2`
Required          | Make that the field be required                         | required        | `required: true`
ValueNotEquals    | Define one value that shouldn't be equal                | valueNotEquals  | `valueNotEquals: 'Dog'`

## Demo
See the validations working on our demo page: https://octaform.github.io/demo

## Changelog

[Check out releases](https://github.com/octaform/octaform-additional/releases)

## License

[The MIT License (MIT)](/LICENSE.md)

Copyright (c) 2018 Christian Fortes
