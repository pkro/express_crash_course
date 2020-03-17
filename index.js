const express = require("express");
const path = require("path");
const members = require("./Members");
const logger = require("./middleware/logger");

const app = express();



//init middleware
app.use(logger);

app.get("/api/members", (req, res) => {
  res.json(members);
});

// set static folder - already enough to serve all files from this folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
