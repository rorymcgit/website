const express = require("express");
app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.render("root");
});

app.listen(3000, () => {
  console.log("app is live on port 3000");
});
