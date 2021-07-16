const router = require("express").Router();

router.get("/", function (req, res) {
  res.render("home");
});
router.get("/createAcct", function (req, res) {
  res.render("createAcct");
});
router.get("/dashboard", function (req, res) {
  res.render("dashboard");
});
router.get("/login", function (req, res) {
  res.render("login");
});
router.get("/myPostDetails", function (req, res) {
  res.render("myPostDetails");
});
router.get("/newPost", function (req, res) {
  res.render("newPost");
});
router.get("/postDetails", function (req, res) {
  res.render("postDetails");
});

module.exports = router;
