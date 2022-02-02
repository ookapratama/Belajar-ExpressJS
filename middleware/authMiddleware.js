
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {

    const header = req.headers.authorization;

    const token = header.split(" ")[1];

    if(!header || header === "" || header === undefined) {
        return res.status(401).json({
            message: "Auth Failed",
        })
    }

    return jwt.verify(token, "secretkey", (err, decoded) => {
        if(err) {
            return res.status(401).json({
                message: "Auth Failed",
            });
        }
        next();
    });
}

module.exports = authMiddleware;