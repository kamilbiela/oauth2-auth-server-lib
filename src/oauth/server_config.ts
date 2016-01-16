export default class ServerConfig {
    alwaysRequireRedirectUri: boolean = true

    // "scope" param settings
    failRequestWhenScopeOmitted: boolean = false
    omittedScopeDefaultValue: string = ""
}