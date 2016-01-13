require('source-map-support').install();
var Hapi = require("hapi");
var services_1 = require("./services");
var redirect_response_1 = require("./src/oauth/redirect_response");
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});
server.route({
    method: ['GET', 'POST'],
    path: '/authorize',
    handler: function (req, rep) {
        try {
            let result = services_1.oAuthRequestHandler.handleAuthorizationRequest(req.query.response_type, req.query.redirect_uri, req.query.client_id, req.query.scope, req.query.state);
            if (result instanceof redirect_response_1.default) {
                return rep("").redirect(result.redirectTo);
            }
            return rep("err err err").code(503);
        }
        catch (e) {
            return rep(e.message);
        }
    }
});
server.route({
    method: ['POST'],
    path: '/token',
    handler: function (req, rep) {
        services_1.oAuthRequestHandler.handleAccessTokenRequest(req.query.grant_type, req.query.code, req.query.redirect_uri, req.query.client_id);
        return rep("");
    }
});
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
exports.default = server;
//# sourceMappingURL=index.js.map