import IResponse from "./iresponse";

export default class HtmlResponse implements IResponse {
    constructor(
        public hmtl: string
    ) {
    }
}