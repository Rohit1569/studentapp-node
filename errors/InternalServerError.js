const StudentAppError = require("./StudentAppError");
const { StatusCodes } = require('http-status-codes')

class InternalServerError extends StudentAppError {
    constructor(specificMessage) {
        super("Internal Server Error",
            "Internal Server Error",
            StatusCodes.INTERNAL_SERVER_ERROR, specificMessage)
    }
}
module.exports = InternalServerError