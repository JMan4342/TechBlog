const router = require("express").Router();
const { User, Blog } = require("../models");
const withAuth = require('../utils/auth')

router.get("/", withAuth, async function (req, res) {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('home', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }});

router.get("/createAcct", function (req, res) {
  res.render("createAcct");
});

// Redirect to login page if user not logged-in during session
router.get("/dashboard", function (req, res) {
  if (!req.session.logged_in) {
    res.redirect('login');
    return;
  }
  res.render("dashboard");
});

// Set login routing based off if user logged-in during session
router.get("/login", function (req, res) {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render("login");
});

// Redirect to login page if user not logged-in during session
router.get("/myPostDetails", function (req, res) {
  if (!req.session.logged_in) {
    res.redirect('login');
    return;
  }
  res.render("myPostDetails");
});

// Redirect to login page if user not logged-in during session
router.get("/newPost", function (req, res) {
  if (!req.session.logged_in) {
    res.redirect('login');
    return;
  }
  res.render("newPost");
});

// Redirect to login page if user not logged-in during session
router.get("/postDetails", function (req, res) {
  if (!req.session.logged_in) {
    res.redirect('login');
    return;
  }
  res.render("postDetails");
});

module.exports = router;
