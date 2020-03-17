const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const app = express();

//init middleware
app.use(logger);

// members API
app.use('/api/members/', require('./routes/api/members'));

//app.use('/api/members', router)
// set static folder - already enough to serve all files from this folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
