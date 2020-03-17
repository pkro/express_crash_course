const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const members = require('./Members');
const logger = require("./middleware/logger");

const app = express();

//init middleware
app.use(logger);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const title = 'Member app';
  res.render('index', {
    title,
    members
  });
});

// members API
app.use("/api/members/", require("./routes/api/members"));

// set static folder - already enough to serve all files from this folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
