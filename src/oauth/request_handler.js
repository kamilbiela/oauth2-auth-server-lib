var url = require("url");
var errors = require("./errors");
var redirect_response_1 = require("./redirect_response");
class RequestHandler {
    constructor(settings) {
        this.settings = settings;
    }
    handleAuthorizationCodeGrantRequest(responseType, clientId, redirectUri = null, scope = null, state = null) {
        if (typeof redirectUri !== "string" || redirectUri.length === 0) {
            throw new errors.InvalidRequestRedirectUriError();
        }
        if (typeof clientId !== "string" || clientId.length === 0) {
            throw new errors.InvalidRequestError();
        }
        let parsedUrl = url.parse(redirectUri, true);
        delete parsedUrl.hash;
        delete parsedUrl.search;
        parsedUrl.query.code = "ABCDzRANOMzCODEzTODO";
        if (state) {
            parsedUrl.query.state = state;
        }
        return new redirect_response_1.default(url.format(parsedUrl));
    }
    handleClientCredentialsGrant() {
    }
    handleAuthorizationRequest(responseType, redirectUri, clientId, scope = null, state = null) {
        try {
            if (typeof responseType !== "string") {
                throw new errors.InvalidRequestError();
            }
            if (typeof responseType !== "string") {
                throw new errors.InvalidRequestError();
            }
            if (responseType === "code") {
                return this.handleAuthorizationCodeGrantRequest(responseType, clientId, redirectUri, scope, state);
            }
            else {
                throw new errors.UnsupportedResponseTypeError();
            }
        }
        catch (e) {
            if (e instanceof errors.InvalidRequestError) {
            }
        }
    }
    handeResourceOwnerPasswordCredentialsGrant() {
    }
    handleAccessTokenRequest(grantType, code, redirectUri, clientId) {
        if (grantType !== "authorization_code") {
        }
    }
}
exports.RequestHandler = RequestHandler;
//# sourceMappingURL=request_handler.js.map