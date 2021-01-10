const assert = require('assert');

assert.strictEqual(typeof capitalizeFirtsLetters, 'function');
assert.strictEqual(capitalizeFirtsLetters.length, 1);
assert.strictEqual(capitalizeFirtsLetters('hello world'), 'Hello World');
assert.strictEqual(capitalizeFirtsLetters('one'), 'One');
assert.strictEqual(capitalizeFirtsLetters('a'), "A");
assert.strictEqual(capitalizeFirtsLetters(''), '');