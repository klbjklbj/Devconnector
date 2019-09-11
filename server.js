//import statements
const express = require("express");
const mongoose = require("mongoose");

//create instance of express
const app = express();

//Db config
//connection string in keys file
const db = require("./config/keys").mongoURI;

//connect to mongodb
mongoose
  .connect(db)
  //prmoise statement
  .then(() => console.log("MongoDb connected"))
  .catch(err => console.log(err));

//create first route
//allow user to get data back
app.get("/", (req, res) => res.send("hello"));

const port = 7000;

//tell express to listen on this port
app.listen(port, () => console.log(`Server running on port ${port}`));
