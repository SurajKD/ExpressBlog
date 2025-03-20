const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();

// Setup Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Serve Static Files
app.use(express.static(path.join(__dirname, "../static")));

// Import Routes
const blogRoutes = require("./routes/blog");
app.use("/", blogRoutes);

// Export for Netlify
module.exports.handler = serverless(app);