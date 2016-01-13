var assert = require("assert");
var request = require("request");
describe('Test', function () {
    describe('#', function () {
        it('should just work', function (done) {
            request('http://localhost:8000/', (error, response, body) => {
                assert.ifError(error);
                done();
            });
        });
    });
});
//# sourceMappingURL=test1.js.map