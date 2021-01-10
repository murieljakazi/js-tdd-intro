const assert = require('assert');

const Rectangle = require('../Reactangle');

describe('Rectangle', () => {
    it('is a quadrilateral with 4 equal sides', () => {
        const rectangle = new Rectangle(10, 10);
        assert.strictEqual(rectangle.isSquare(), true)
    });

    it('is a rectangle with the differing length and widths',() => {
        const rectangle = new Rectangle(10, 5);
        assert.strictEqual(rectangle.isSquare(), false)
    });

    it('has a perimeter of 30', () => {
        const rectangle = new Rectangle(10, 5);
        assert.strictEqual(rectangle.getPerimeter(), 30);
    });

    it('has an area of 50', () => {
        const rectangle = new Rectangle(10, 5);
        assert.strictEqual(rectangle.getArea(), 50);
    });
})