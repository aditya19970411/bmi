const express = require("express");
const router = require("./controller");
// create an app using express constructor
const app = express();
// declare your port
const port = process.env.PORT || 4000;
// Error Handlers and loggers
const { errorHandler, logErrors } = require("./middlewares/errorHandler");

// For JSON parsing
app.use(express.json());

// BMI calculate router
app.use("/api", router);

// Error Logs
app.use(logErrors);

// Error Handler
app.use(errorHandler);

// call the listen method on the app
app.listen(port, () => {
  console.log("Server is running is port: " + port);
});
