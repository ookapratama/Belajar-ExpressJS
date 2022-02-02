
// memanggil library Json Web Token
const jwt = require('jsonwebtoken');

// untuk generate simpan data inputan ke variabel data
async function generateAccessToken(data)  {
    
    return jwt.sign({ data }, "secretkey", { expiresIn: "1h"});

}

module.exports = generateAccessToken;