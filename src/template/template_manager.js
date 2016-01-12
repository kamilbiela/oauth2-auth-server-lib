import TemplateEnum from "./template_enum";
export default class TemplateManager {
    constructor(templatingStrategy) {
        this.templatingStrategy = templatingStrategy;
    }
    getAuthorizationRequestForm(responseType, redirectUri, clientId, scope, state) {
        this.templatingStrategy.get(TemplateEnum.AUTHORIZATION_REQUEST_FORM, {
            responseType: responseType,
            redirectUri: redirectUri,
            clientId: clientId,
            scope: scope,
            state: state,
            url: "//authorize"
        });
    }
}
