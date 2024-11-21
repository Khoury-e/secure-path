const bcrypt = require("bcrypt");

exports.hashPassword = (password) => {
    const hash = bcrypt.hashSync(password, 12); 
    return hash;
}

exports.comparePasswordHash = (inputPassword, userPassword) => {
    return bcrypt.compareSync(inputPassword, userPassword);
}