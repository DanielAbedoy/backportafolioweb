const express = require('express');
const { controllerProject } = require('./db/controller');
const {isAuth} = require('./auth');

const router = express.Router();

router.get("/list", controllerProject.getAll);

router.post("/add",isAuth ,controllerProject.add)

router.put("/update",isAuth, controllerProject.update);



module.exports = router;