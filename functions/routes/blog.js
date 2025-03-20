const express = require("express");
const router = express.Router();
const blogs = require("../data/blogs"); // Adjusted path

// Homepage Route
router.get("/", (req, res) => {
  res.render("home");
});

// Blog Home Route
router.get("/blog", (req, res) => {
  res.render("blogHome", {
    blogs: blogs.blogs,
  });
});

// Blog Post Route
router.get("/blogpost/:slug", (req, res) => {
  const blog = blogs.blogs.find((blog) => blog.slug === req.params.slug);

  if (!blog) {
    return res.status(404).render("404", { message: "Blog Not Found" });
  }

  res.render("blogPage", {
    blog: blog,
  });
});

module.exports = router;