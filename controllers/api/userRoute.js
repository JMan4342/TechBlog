const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      subQuery: false,
      include: [{ model: Blog }, { model: Comment }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      subQuery: false,
      include: [{ model: Blog }, { model: Comment }],
    });

    if (!userData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userData = await User.update(
      { username: req.body.username, password: req.body.password },
      { where: { id: req.params.id } }
    );

    if (!userData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to verify entered username and password match for login page
router.post("/login", async (req, res) => {
  try {
    console.log("1");
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    console.log("2");

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
