const express = require("express");
const app = express();

app.get("/", () => {
  resizeBy.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000! Celebrate!");
});
