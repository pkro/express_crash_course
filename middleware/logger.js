const moment = require('moment');

//  middleware, next = next middleware (these are all passed in by express)
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next(); // call next middleware
};

module.exports = logger;