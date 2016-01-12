export default class Client {
    constructor(id, password, secret, type, redirectionEndpointURI) {
        this.id = id;
        this.password = password;
        this.secret = secret;
        this.type = type;
        this.redirectionEndpointURI = redirectionEndpointURI;
    }
}
