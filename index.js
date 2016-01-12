import * as Hapi from "hapi";
var ClientType;
(function (ClientType) {
    ClientType[ClientType["CONFIDENTAL"] = 1] = "CONFIDENTAL";
    ClientType[ClientType["PUBLIC"] = 2] = "PUBLIC";
})(ClientType || (ClientType = {}));
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
            let result = oauth.handleAuthorizationRequest(req.query.response_type, req.query.redirect_uri, req.query.client_id, req.query.scope, req.query.state);
            if (result instanceof RedirectResponse) {
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
        oauth.handleAccessTokenRequest(req.query.grant_type, req.query.code, req.query.redirect_uri, req.query.client_id);
        return rep("");
    }
});
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
export default server;
