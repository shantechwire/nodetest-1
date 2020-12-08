// importing node framework
const express = require("express");

const app = express();

// Respond with "Hello World via Github Actions" for requests that hit our root "/"
app.get("/", function (req, res) {
 return res.send("Hello World via Github Actions");
});

// listen to port 3001 by default
app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running");
});

module.exports = app;
