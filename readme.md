# @kszongic/camel2constant-cli

> Convert camelCase strings to CONSTANT_CASE from the command line. Zero dependencies.

[![npm version](https://img.shields.io/npm/v/@kszongic/camel2constant-cli)](https://www.npmjs.com/package/@kszongic/camel2constant-cli)
[![license](https://img.shields.io/npm/l/@kszongic/camel2constant-cli)](./LICENSE)

## Install

```bash
npm install -g @kszongic/camel2constant-cli
```

## Usage

```bash
# Convert arguments
$ camel2constant myVariableName
MY_VARIABLE_NAME

$ camel2constant helloWorld fooBarBaz
HELLO_WORLD
FOO_BAR_BAZ

# Pipe from stdin
$ echo "backgroundColor" | camel2constant
BACKGROUND_COLOR

# Multiple lines
$ printf "fontSize\nmarginTop" | camel2constant
FONT_SIZE
MARGIN_TOP
```

## Options

```
-h, --help     Show help message
-v, --version  Show version number
```

## API

This is a CLI-only tool. For programmatic use, the conversion is simply:

```js
str.replace(/([a-z0-9])([A-Z])/g, '$1_$2')
   .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
   .toUpperCase();
```

## License

MIT © kszongic
