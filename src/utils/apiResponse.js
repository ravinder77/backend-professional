class Apiresponse {
    constructor(statusCode, message = "Success", data) {
        this.statusCode = statusCode
        this.message = message;
        this.success = statusCode >= 200 && statusCode < 300;
        this.data = data;
    }
}

export default Apiresponse;