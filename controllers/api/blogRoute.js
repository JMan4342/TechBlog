const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const blogData = await Blog.findAll({
        // subQuery: false,
        include: {model: Comment},
      });
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
        // subQuery: false,
        include: {model: Comment},
      });
  
      if (!blogData) {
        res.status(404).json({ message: "No blog found with that id!" });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.post("/post", async (req, res) => {
    try {
      const blog = {...req.body}
      blog.userId = req.session.user_id;
      const blogData = await Blog.create(blog);
      res.status(200).json(blogData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });
  
  router.put("/update/:id", async (req, res) => {
    try {
      const blogData = await Blog.update(
        { title: req.body.title, content: req.body.content },
        { where: { id: req.params.id } }
      );
  
      if (!blogData) {
        res.status(404).json({ message: "No blog found with that id!" });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!blogData) {
        res.status(404).json({ message: "No blog found with that id!" });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  });
  

module.exports = router;