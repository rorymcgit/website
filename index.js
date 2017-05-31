const express = require("express");
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.render("root");
});

app.listen(3000, () => {
  console.log("app is live on port 3000");
});
