var template_enum_1 = require("./template_enum");
class TemplateManager {
    constructor(templatingStrategy) {
        this.templatingStrategy = templatingStrategy;
    }
    getAuthorizationRequestForm(responseType, redirectUri, clientId, scope, state) {
        this.templatingStrategy.get(template_enum_1.default.AUTHORIZATION_REQUEST_FORM, {
            responseType: responseType,
            redirectUri: redirectUri,
            clientId: clientId,
            scope: scope,
            state: state,
            url: "//authorize"
        });
    }
}
exports.TemplateManager = TemplateManager;
//# sourceMappingURL=template_manager.js.map