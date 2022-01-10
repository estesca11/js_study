const assert = require('assert');
describe('pow', function () {
    it('should return n pow of param', function () {
        assert.equal(pow(2, 3), 8);
    })
});

function pow(x, n) {
    if (n === 1) {
        return x;
    }
    else {
        return x * pow(x, n - 1);
    }
}
