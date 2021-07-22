const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async function (req, res) {
  try {
    const blogData = await Blog.findAll({
      // attributes: { exclude: ['password'] },
      // order: [['username', 'ASC']],
    });

    const blogs = blogData.map((project) => project.get({ plain: true }));
    console.log(blogs);
    res.render("home", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/createAcct", function (req, res) {
  res.render("createAcct");
});

// Redirect to login page if user not logged-in during session
router.get("/dashboard", async function (req, res) {
  if (!req.session.logged_in) {
    res.redirect("login");
    return;
  }
  const blogData = await Blog.findAll({
    where: { userId: req.session.user_id },
  });
  const blogs = blogData.map((project) => project.get({ plain: true }));
  console.log(blogs);
  res.render("dashboard", {
    blogs,
    logged_in: req.session.logged_in,
  });
});

// Set login routing based off if user logged-in during session
router.get("/login", function (req, res) {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Redirect to login page if user not logged-in during session
router.get("/editPost/:id", async function (req, res) {
  if (!req.session.logged_in) {
    res.redirect("login");
    return;
  }
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: { model: Comment },
    });
    res.render("editPost", {
      blog: blogData.get(),
      // comments: blogData.get().comments,
      logged_in: req.session.logged_in,
    });
    console.log(blogData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Redirect to login page if user not logged-in during session
router.get("/newPost", function (req, res) {
  if (!req.session.logged_in) {
    res.redirect("login");
    return;
  }
  res.render("newPost", {
    logged_in: req.session.logged_in,
  });
});

// Redirect to login page if user not logged-in during session
router.get("/postDetails/:id", async function (req, res) {
  if (!req.session.logged_in) {
    res.redirect("login");
    return;
  }
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: { model: Comment },
    });
    res.render("postDetails", {
      blog: blogData.get(),
      comments: blogData.get().comments,
      logged_in: req.session.logged_in,
    });
    console.log(blogData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
