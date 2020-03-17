const express = require("express");
const path = require("path");

const app = express();

const members = [
  { id: 1, name: "John Doe", email: "a@bc.de", status: "active" },
  { id: 2, name: "Jane Doe", email: "b@bc.de", status: "active" },
  { id: 3, name: "Frank Doe", email: "c@bc.de", status: "inactive" }
];

app.get("/api/members", (req, res) => {
  res.json(members);
});

// set static folder - already enough to serve all files from this folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
