const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const http = require('http');

//Routs
const { routesApi, dbMongo, router } = require('./src/routes');
const app = express();
const server = http.createServer(app);

//Settings
app.set("port", process.env.PORT || 3001)

//Config
//app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors({ origin: "*", }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/projects", routesApi);
app.use("/auth", router);


server.listen(app.get("port"), () => {
  console.log("App running in port ", app.get("port"));
})
