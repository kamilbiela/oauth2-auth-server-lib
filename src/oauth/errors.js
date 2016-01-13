class InvalidRequestError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "invalid_request";
    }
}
exports.InvalidRequestError = InvalidRequestError;
class InvalidRequestRedirectUriError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "invalid_request";
    }
}
exports.InvalidRequestRedirectUriError = InvalidRequestRedirectUriError;
class AccessDeniedError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "access_denied";
    }
}
exports.AccessDeniedError = AccessDeniedError;
class UnsupportedResponseTypeError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "unsupported_response_type";
    }
}
exports.UnsupportedResponseTypeError = UnsupportedResponseTypeError;
class InvalidScopeError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "invalid_scope";
    }
}
exports.InvalidScopeError = InvalidScopeError;
class ServerError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "server_error";
    }
}
exports.ServerError = ServerError;
class TemporarilyUnavailableError extends Error {
    constructor(...args) {
        super(...args);
        this.message = "temporarily_unavailable";
    }
}
exports.TemporarilyUnavailableError = TemporarilyUnavailableError;
//# sourceMappingURL=errors.js.map