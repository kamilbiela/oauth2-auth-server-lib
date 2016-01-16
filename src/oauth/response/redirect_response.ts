import IResponse from "./iresponse";

export default class RedirectResponse implements IResponse {
    constructor(
        public redirectTo: string
    ) {
    }
}