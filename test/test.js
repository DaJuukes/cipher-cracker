const {assert} = require('chai');

const breaker = require('../src');

describe('Caesar cipher breaking', function() {
    it ('should break a simple HELLO with shift of 3', function() {
        assert.equal(breaker.Caesar('KHOOR'), 'HELLO');
    });

    it ('should handle wrong argument', function() {
        assert.throws(() => {breaker.Caesar(3);}, TypeError);
    });
});
