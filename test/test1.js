import * as assert from "assert";
import * as request from "request";
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
