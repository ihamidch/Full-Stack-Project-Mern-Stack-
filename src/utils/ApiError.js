class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        stack = ""
    )
    {
        super(message);
        this.statusCode = statusCode;
        this.code = null;
        // this.code is used to store the error code that is returned by the API
        // and can be used to identify the type of error that occurred.
        this.message = message;
        this.suucess = false;
        this.errors = errors;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
        // The Error.captureStackTrace() method is used to capture the stack trace of the error.
        //  This is useful for debugging purposes, as it provides information about the sequence of
        //   function calls that led to the error.
    }
}
//explain this whole 
// The ApiError class is a custom error class that extends the built-in Error class.
//  It takes four parameters: statusCode, message, errors, and stack.
//   The statusCode parameter is the HTTP status code that will be returned by the API.
//    The message parameter is the error message that will be returned in the response.
//     The errors parameter is an array of error objects that provide additional information about the error.
//      The stack parameter is the error stack trace.

export { ApiError };