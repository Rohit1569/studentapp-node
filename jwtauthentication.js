const jwt = require("jsonwebtoken");
class jwtAuthentication{
    static secretKey = "MySecretKey";

    constructor(id,userName,isAdmin) {
        this.id = id;
        this.userName = userName;
        this.isAdmin = isAdmin;
    }

    static Authenticate(id, userName, isAdmin) {
        try {
            let payLoad = new jwtAuthentication(id,userName,isAdmin)
            let token = jwt.sign(JSON.stringify(payLoad), jwtAuthentication.secretKey)
            return token;
        }
        catch {
            throw new Error("Authentication failed")
        }
    }
}