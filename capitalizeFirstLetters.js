function capitalizeFirstLetters(input) {
    const strings = input.split(" ");
    const result = strings.map((string, index) => {
        return string.length > 0 
        ? string[0].toUpperCase() + string.slice(1)
        : ""
    });
    return result.join(' ');
};

module.exports = capitalizeFirstLetters;

// assert.strictEqual(typeof capitalizeFirtsLetters, 'function');
// assert.strictEqual(capitalizeFirtsLetters.length, 1);
// assert.strictEqual(capitalizeFirtsLetters('hello world'), 'Hello World');
// assert.strictEqual(capitalizeFirtsLetters('one'), 'One');
// assert.strictEqual(capitalizeFirtsLetters('a'), "A");
// assert.strictEqual(capitalizeFirtsLetters(''), '');