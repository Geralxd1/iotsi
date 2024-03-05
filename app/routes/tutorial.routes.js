module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);
  
  // Retrieve all published Tutorials
  router.get("/alerts", tutorials.alerts);

  // Update a Tutorial with id
  router.put("/alerts/:id", tutorials.updateAlerts);
  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);


  app.use('/api/iot', router);
};
