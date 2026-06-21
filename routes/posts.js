const express = require("express");

const router = express.Router();

const postController = require("../controllers/postController");


// mostrar posts
router.get("/", postController.listarPosts);


// criar post
router.post("/novo", postController.criarPost);


// apagar post
router.post("/apagar/:id", postController.apagarPost);


module.exports = router;