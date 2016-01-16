import * as assert from "assert";
import RequestHandler from "../../src/oauth/request_handler";
import ServerConfig from "../../src/oauth/server_config";

describe('RequestHandler', () => {
    describe('authorization request', () => {

        let requestHandler: RequestHandler = null;
        let serverConfig = new ServerConfig();

        beforeEach(() => {
            requestHandler = new RequestHandler(serverConfig);
        });

        it('', () => {
            try {
                let response = requestHandler.handleAuthorizationRequest(
                    "code_not", "http://redirect", "client1"
                );
            } catch (e) {
                return assert.fail();
            }

            assert.ok(true);
        });
    });
});
