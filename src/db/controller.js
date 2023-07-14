const { Project } = require('./models');
const { isAuth } = require('../auth');

const controllerProject = {
  //Get all list of projects
  getAll: function (req, resp) {
    Project.find(function (err, projects) {
      if (err) return resp.status(500).json({ message: "Error to find projects" });
      return resp.json(projects);
    });
    
  },

  //Add new project
  add: function (req, resp) { 
    const { data } = req.body;
    let proj = new Project(data);
    proj.save(function (err, project) { 
      if (err) return resp.status(500).json({ "message": "Error to create project",error_message:err});
      return resp.status(201).json({ "message": "OK", _id: project._id });
    })
  },

  //Update some project
  update: function (req, resp) {
    const { id, name,tools, link, images } = req.body;

    Project.findOne({ _id: id }, function (err, project) {
      
      if (err) return resp.status(500).json({ "message": "Error to find it",error_message:err});
      if (!project) return resp.status(400).json({ "message": "Poject doesnt exist"});

      project.name = name;
      project.tools = tools;
      project.link = link;
      project.images = images;

      project.save(function (err, pro) {
        if (err) return resp.status(500).json({ "message": "Error to update project", error_message: err });
        return resp.status(201).json({ "message": "OK", data: pro });
      })

    })
  },

};

module.exports = { controllerProject };