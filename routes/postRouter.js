
const express = require("express");
const { authHandler } = require("../middlewares/authHandlers");
const permissionHandlers = require("../middlewares/permissionHandlers");
const posts = require("../usecases/posts");

const router = express.Router();

router.get("/:posts", async (req, res, next) => {
    try {
      const { limit } = req.query;
  
      const payload = await posts.get(limit);
      res.json({
        ok: true,
        message: "Done!",
        payload,
      });
    } catch (err) {
      next(err);
    }
  });
  
  router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const payload = await posts.getbyId(id);
  
      res.json({
        ok: true,
        message: "Done!",
        payload,
      });
    } catch (err) {
      next(err);
    }
  });
  