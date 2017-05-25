const express = require("express");
app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("app is live on port 3000");
});
