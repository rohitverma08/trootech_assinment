const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const path = require("path");
const logger = require("morgan");

const port = process.env.PORT || 7001;

const corsOption = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-access-token"],
};

app.use(cors(corsOption));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

/* api routes */
var categoryRouter = require("./routes/productCategories");
var productsRouter = require("./routes/products");
app.use("/v1/", categoryRouter);
app.use("/v1/", productsRouter);

app.listen(port, (error) => {
  error
    ? console.log(`error in server setup ${err}`)
    : console.log(`App listening on port ${port}!`);
});

app.use(function (req, res) {
  res.status(404).json({
    status: 404,
    message: "Sorry can't find that!",
    data: {},
  });
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.json({
    status: err.status,
    message: err.message,
    data: {},
  });
  next();
});

module.exports = app;