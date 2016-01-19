import * as assert from "assert";
import RequestHandler from "../../src/oauth/request_handler";
import ServerConfig from "../../src/oauth/server_config";
import * as errors from "../../src/oauth/errors";

describe('RequestHandler', () => {
    describe('3.1 Authorization Endpoint', () => {

        let requestHandler: RequestHandler = null;
        let serverConfig = new ServerConfig();

        beforeEach(() => {
            requestHandler = new RequestHandler(serverConfig);
        });

        describe('3.1.1 response_type value MUST be "code" or "token" or registered extension value', () => {
            it('Should throw UnsupportedResponseTypeError when response_type is wrong', () => {
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

            it('Should not trow error when response_type is valid value', () => {
                for (let responseType in ['code', 'token']) {
                    let response;
                    try {
                        response = requestHandler.handleAuthorizationRequest(
                            responseType, "http://redirect", "client1"
                        );
                    } catch (e) {
                        return assert.fail(null, null, `Got error response ${e.message}`);
                    }
                }
            });

            it(`3.1.2.4 if redirection URI is missing, invalid, or mismatching, the authorization server
                SHOULD inform the resource owner of the error and MUST NOT automatically redirect the user-agent to the invalid redirection URI`,
                () => {

                }
            );
        });
    });

    describe('3.2 Token Endpoint', () => {

    });
});
