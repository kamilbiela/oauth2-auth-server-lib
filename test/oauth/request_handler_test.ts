import * as assert from "assert";
import RequestHandler from "../../src/oauth/request_handler";
import ServerConfig from "../../src/oauth/server_config";
import * as errors from "../../src/oauth/errors";

describe('RequestHandler', () => {
    describe('authorization request', () => {

        let requestHandler: RequestHandler = null;
        let serverConfig = new ServerConfig();

        beforeEach(() => {
            requestHandler = new RequestHandler(serverConfig);
        });

        it('should throw exception on wrong response_type', () => {
            let response;
            try {
                response = requestHandler.handleAuthorizationRequest(
                    "code_not", "http://redirect", "client1"
                );
            } catch (e) {
                return assert.ok(e instanceof errors.UnsupportedResponseTypeError, "Should throw UnsupportedResponseTypeError on wrong response type value");
            }

            assert.ok(response, "Response can't be null / undefined / false");

            assert.fail(null, null, "Should throw an exception");
        });
    });
});
