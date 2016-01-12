export class InvalidRequestError extends Error {
    message = "invalid_request"
}

// custom error type to indicate that there is problem with redirect uri
export class InvalidRequestRedirectUriError extends Error {
    message = "invalid_request"
}

export class AccessDeniedError extends Error {
    message = "access_denied"
}

export class UnsupportedResponseTypeError extends Error {
    message = "unsupported_response_type"
}

export class InvalidScopeError extends Error {
    message = "invalid_scope"
}

export class ServerError extends Error {
    message = "server_error"
}

export class TemporarilyUnavailableError extends Error {
    message = "temporarily_unavailable"
}

