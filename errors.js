export class InvalidRequestError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "invalid_request";
    }
}
export class InvalidRequestRedirectUriError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "invalid_request";
    }
}
export class AccessDeniedError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "access_denied";
    }
}
export class UnsupportedResponseTypeError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "unsupported_response_type";
    }
}
export class InvalidScopeError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "invalid_scope";
    }
}
export class ServerError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "server_error";
    }
}
export class TemporarilyUnavailableError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "temporarily_unavailable";
    }
}
