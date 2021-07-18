const router = require("express").Router();
const { User, Blog } = require("../models");

router.get("/", async function (req, res) {
try {
  const blogs = await Blog.findAll({include: [User]})
  res.render("home", {blogs});

} catch (err) {
  console.log(err)
  res.json(err)
}
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
