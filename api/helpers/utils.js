const crypto = require('crypto');

exports.setHeaders = function(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
};

exports.createSha1 = function (data) {
    return crypto.createHash("sha1")
        //.update(data, "binary") // Node js uses UTF-8 representation of string, to hash the binary representation use binary on update
        .digest("hex"); // Return hexadecimal
};
