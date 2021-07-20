const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const blogData = await Blog.findAll();
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id);
  
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
      const blogData = await Blog.create(req.body);
      res.status(200).json(blogData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });
  
  router.put("/:id", async (req, res) => {
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
    }
  });
  

module.exports = router;