# str-convert

A set of tools and function to convert strings, numbers, paths etc.

## Install

**npm**

```bash
npm install str-convert --save-dev
```

**yarn**

```bash
yarn add str-convert
```

## Usage

**A single function**

```js
import { pascalCase } from 'str-convert';

const convertedString = pascalCase('This string to PascalCase');
```

**all functions**

```js
import * as convert from 'str-convert';

const convertedString = conver.pascalCase('This string to PascalCase');
```

## Functions

### Case

#### lowerCase

Convert string to lowercase

```js
const str = lowerCase('This is a String');

// result; this is a string
```

### pascalCase

Convert string to pascalCase

```js
const str = pascalCase('This is a String');

// result; ThisIsAString
```
