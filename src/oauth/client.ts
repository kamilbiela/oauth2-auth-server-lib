import ClientTypeEnum from "./client_type_enum";

export default class Client {
    constructor(
        private id: string,  // client identifier
        private password: string, // client password, used mainly in confidental client type???
        private secret: string,
        private type: ClientTypeEnum,
        private redirectionEndpointURI: string[] // @todo(kamil): remove fragment!, must be absolute uri, SHOULD be https
    ) {

    }
}
