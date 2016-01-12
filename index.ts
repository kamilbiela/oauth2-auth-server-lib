import * as Hapi from "hapi";
import * as url from "url";
import * as errors from "./src/oauth/errors";
import Redire
import {oAuthRequestHandler} from "./services";

enum ClientType {
    CONFIDENTAL = 1,
    PUBLIC = 2, // i.e. single page app
}



// class ICodeStore {
//     protected date = new Date();
//     protected codes = new Map();

//     set(code: string, TTLSeconds: number) {
//         this.codes.set(code);
//         setTimeout(() => {
//             this.codes.delete(code);
//         }, TTLSeconds);
//     }

//     get(code) {
//         this.codes.get(code);
//     }
// }


var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: ['GET', 'POST'],
    path:'/authorize',
    handler: function (req, rep) {
        try {
            let result = oAuthRequestHandler.handleAuthorizationRequest(
                req.query.response_type,
                req.query.redirect_uri,
                req.query.client_id,
                req.query.scope,
                req.query.state
            )

            if (result instanceof RedirectResponse) {
                return rep("").redirect(result.redirectTo);
            }

            return rep("err err err").code(503);
        } catch (e) {
            return rep(e.message);
        }
    }
});

server.route({
    method: ['POST'],
    path:'/token',
    handler: function (req, rep) {
        oauth.handleAccessTokenRequest(
            req.query.grant_type,
            req.query.code,
            req.query.redirect_uri,
            req.query.client_id
        );
        return rep("");
    }
});

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});

export default server;