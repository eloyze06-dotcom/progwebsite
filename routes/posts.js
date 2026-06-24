const express = require("express");

const router = express.Router();

const postController = require("../controllers/postController");

const upload = require("../config/multer");



// mostrar posts
router.get("/", postController.listarPosts);



// ver um post específico
router.get("/:id", postController.verPost);



// criar post com imagem
router.post(
    "/novo",
    upload.single("imagem"),
    postController.criarPost
);



// apagar post
router.post(
    "/apagar/:id",
    postController.apagarPost
);



module.exports = router;