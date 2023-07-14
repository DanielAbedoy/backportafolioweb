const mongoose = require('mongoose');

let Schema = mongoose.Schema;


const modelProject = new Schema({
  name: {type:String, required:"Name is required"},
  tools: { type: Array, required: "Some tool is required" },
  link: String,
  images:{ type: Array, required: "Some image is required" },
});

const Project = mongoose.model("projects", modelProject);

module.exports = { Project };
