export default class ServerConfig {
    alwaysRequireRedirectUri: boolean

    // "scope" param settings
    failRequestWhenScopeOmitted: boolean
    omittedScopeDefaultValue: string
}