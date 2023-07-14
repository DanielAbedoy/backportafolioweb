const mongoose = require('mongoose');
const URL = "mongodb://localhost:27017/portfolio";

//const URL_WEB = "mongodb+srv://danielabedoy:perrojosi123@portfolio-abedoy.mvxwd.mongodb.net/portfolio-abedoy?retryWrites=true&w=majority";
const URL_WEB = "mongodb+srv://danielabedoy:perrojosi123@clusterportafolio.edyflxe.mongodb.net/portafolioweb?retryWrites=true&w=majority";

mongoose.connect(URL_WEB);

mongoose.connection.on("connected", function () {
  console.log("DB MONGO CONECCTED ON", URL_WEB);
})

mongoose.connection.on("error", function () {
  console.log("Error to connect");
})

