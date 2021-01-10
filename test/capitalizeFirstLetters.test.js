const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
    it('is a function taking one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    it('transforms one word/letter string correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('one'), 'One');
        assert.strictEqual(capitalizeFirstLetters('a'), "A");
    });

    it('works with a multiple word string', () => {
        assert.strictEqual(capitalizeFirstLetters('hello world'), 'Hello World');
    });

    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });
});