import TemplateEnum from "./template_enum";
import ITemplatingStrategy from "./itemplating_strategy";

export default class TemplateManager {
    constructor(
        protected templatingStrategy: ITemplatingStrategy
    ) {

    }

    public getAuthorizationRequestForm(responseType, redirectUri, clientId, scope, state) {
        this.templatingStrategy.get(
            TemplateEnum.AUTHORIZATION_REQUEST_FORM, {
            responseType: responseType,
            redirectUri: redirectUri,
            clientId: clientId,
            scope: scope,
            state: state,
            url: "//authorize" //@todo, extract to config value
        })
    }
}