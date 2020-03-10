const {User} = require("../models");
const auth = require("../helpers/auth");
const utils = require("../helpers/utils");

exports.login = function(req, res, next) {

    const roleIn = req.swagger.params.role.value;
    const usernameIn = req.body.username;
    const passwordIn = req.body.password;

    if (roleIn !== "user" && roleIn !== "admin") {
        res.writeHead(400, {"Content-Type": "application/json"});

        return res.end(JSON.stringify({message: 'Error: Role must be either "admin" or "user"'}));
    }

    User.findOne({
        where: {
            username: usernameIn
        }
    }).then(user => {

        if (user.username === usernameIn && user.password === passwordIn && user.role === roleIn) {
            const tokenKey = auth.issueToken(usernameIn, roleIn);

            res.writeHead(200, { "Content-Type": "application/json" });

            return res.end(JSON.stringify({token: tokenKey}));
        } else {
            res.writeHead(403, {"Content-Type": "application/json"});

            return res.end(JSON.stringify({message: "Error: Credentials incorrect"}));
        }
    }).catch(error => res.status(403).send({message: "Error: " + error}));
};
