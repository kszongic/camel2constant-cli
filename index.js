#!/usr/bin/env node
'use strict';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`Usage: camel2constant [options] <string...>

Convert camelCase strings to CONSTANT_CASE.

Options:
  -h, --help     Show this help message
  -v, --version  Show version number

Examples:
  $ camel2constant myVariableName
  MY_VARIABLE_NAME

  $ echo "backgroundColor" | camel2constant
  BACKGROUND_COLOR

  $ camel2constant helloWorld fooBarBaz
  HELLO_WORLD
  FOO_BAR_BAZ`);
  process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
  const { version } = require('./package.json');
  console.log(version);
  process.exit(0);
}

function camelToConstant(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .toUpperCase();
}

function processLine(line) {
  const trimmed = line.trim();
  if (trimmed) console.log(camelToConstant(trimmed));
}

if (args.length > 0) {
  const filtered = args.filter(a => !a.startsWith('-'));
  filtered.forEach(a => console.log(camelToConstant(a)));
} else {
  let buf = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', chunk => { buf += chunk; });
  process.stdin.on('end', () => {
    buf.split('\n').forEach(processLine);
  });
}
