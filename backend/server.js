/* eslint-disable no-unused-vars */
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server started on ${port}`));

