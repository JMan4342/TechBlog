const router = require("express").Router();
const { User, Comment } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const commentData = await Comment.findAll();
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const commentData = await Comment.findByPk(req.params.id);
  
      if (!commentData) {
        res.status(404).json({ message: "No comment found with that id!" });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.post("/", async (req, res) => {
    try {
      const commentData = await Comment.create(req.body);
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.put("/:id", async (req, res) => {
    try {
      const commentData = await Comment.update(
        { title: req.body.title, commentContent: req.body.commentContent },
        { where: { id: req.params.id } }
      );
  
      if (!commentData) {
        res.status(404).json({ message: "No comment found with that id!" });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!commentData) {
        res.status(404).json({ message: "No blog found with that id!" });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;