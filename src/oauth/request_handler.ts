import * as url from "url";
import ServerConfig from "./server_config";
import * as errors from "./errors";
import IResponse from "./response/iresponse";
import RedirectResponse from "./response/redirect_response";

export default class RequestHandler {
    constructor(
        private settings: ServerConfig
    ) {}

    // handle GET, POST, must be https
    handleAuthorizationRequest(
        responseType: string,
        redirectUri: string,
        clientId: string,
        scope: string = null,
        state: string = null
    ): IResponse {

        if (typeof responseType !== "string") {
            throw new errors.InvalidRequestError();
        }

        if (responseType === "code") {
            return this.handleAuthorizationCodeGrantRequest(responseType, clientId, redirectUri, scope, state);
        } else {
            throw new errors.UnsupportedResponseTypeError();
        }

        // 3.1.2.2.  Registration Requirements
        //
        // The authorization server MUST require the following clients to
        // register their redirection endpoint:
        // o  Public clients.
        // o  Confidential clients utilizing the implicit grant type.


        // 3.1.2.3.  Dynamic Configuration
        //
        // If multiple redirection URIs have been registered, if only part of
        // the redirection URI has been registered, or if no redirection URI has
        // been registered, the client MUST include a redirection URI with the
        // authorization request using the "redirect_uri" request parameter.

        // When a redirection URI is included in an authorization request, the
        // authorization server MUST compare and match the value received
        // against at least one of the registered redirection URIs (or URI
        // components) as defined in [RFC3986] Section 6, if any redirection
        // URIs were registered.  If the client registration included the full
        // redirection URI, the authorization server MUST compare the two URIs
        // using simple string comparison as defined in [RFC3986] Section 6.2.1.


        // display login form, auth user.

        // redirect to redirectionEndpointURI
    }


    // 4.1
    private handleAuthorizationCodeGrantRequest(
        responseType: string,
        clientId: string, // REQUIRED.  The client identifier as described in Section 2.2.
        redirectUri: string = null, //  OPTIONAL.  As described in Section 3.1.2.
        scope: string = null, //  OPTIONAL.  As described in Section 3.1.2.
        state: string = null // RECOMMENDED. The parameter SHOULD be used for preventing cross-site request forgery as described in Section 10.12.
    ) {
        if (typeof redirectUri !== "string" || redirectUri.length === 0) {
            console.log("1");
            throw new errors.InvalidRequestRedirectUriError();
        }

        if (typeof clientId !== "string" || clientId.length === 0) {
            console.log("2");
            throw new errors.InvalidRequestError();
        }
console.log("123");
        // scope, see section 3.3
        // check client_id
        // display form
        // make auth
        // redirect
        // parse redirect uri, strip data and redirect
        let parsedUrl = url.parse(redirectUri, true);
        delete parsedUrl.hash;
        delete parsedUrl.search;
        parsedUrl.query.code = "ABCDzRANOMzCODEzTODO";
        if (state) {
            parsedUrl.query.state = state;
        }

        return new RedirectResponse(url.format(parsedUrl));
    }

    // 4.4

    private handleClientCredentialsGrant() {

    }

    handeResourceOwnerPasswordCredentialsGrant() {

    }

    // 3.2.  Token Endpoint
    // The token endpoint is used by the client to obtain an access token by
    // presenting its authorization grant or refresh token.  The token
    // endpoint is used with every authorization grant except for the
    // implicit grant type (since an access token is issued directly).

    // POST
    // nonauth must pass client_id
    // auth dont have to
    handleAccessTokenRequest(
        grantType: string,
        code: string,
        redirectUri: string,
        clientId: string
    ) {
        if (grantType !== "authorization_code") {

        }
    }
}
