const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const dbConfig =  require("./app/config/db.config.js")
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "holis" });
});

require("./app/routes/tutorial.routes.js")(app);
const PORT = dbConfig.PORT;
// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
