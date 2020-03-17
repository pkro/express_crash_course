const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  const file = path.join(__dirname, "public", "index.html");
  console.log(file);
  res.sendFile(file);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
