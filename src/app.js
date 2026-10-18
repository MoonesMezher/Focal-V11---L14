// Setup
const express = require("express");
const app = express();
const logger = require("./middlewares/logger");

// Middlewares
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/users", require("./routes/users.routes"))

// Listen
app.listen(4000, () => {
    console.log("Server is running successfully")
})