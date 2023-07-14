const express = require('express');
const jwt = require('jsonwebtoken');
const KEY = "*PALAbra*?SecrTAAquieStaSACCESS*"
const KEYSECRET = "yaaccedistehijodedios!!"

const router = express.Router();

router.post("/to-access", function (req, resp) {
  const { key } = req.body;

  if (key !== KEY) return resp.status(500).json({ message: "You cant access to my API" });

  const code = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), data: 'youcanaccess' }, KEYSECRET);
  return resp.status(200).json({ tkn: code });
  
});

const isAuth = function (req, resp, next) {
  
  if(!req.headers.authorization) return resp.status(500).json({ error: "No access token" });
  const token = req.headers.authorization.split(" ")[1];

  return jwt.verify(token, KEYSECRET, function (err, decode) {
    if (err) return resp.status(500).json({ error: "You cant access to my API", message: "Error" });
    next();
  });
}

module.exports = {router, isAuth};

