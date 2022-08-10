'use strict';

const momModule = require('..');
const assert = require('assert').strict;

assert.strictEqual(momModule(), 'Hello from momModule');
console.info('momModule tests passed');
