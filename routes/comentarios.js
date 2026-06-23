const express = require("express");

const router = express.Router();

const comentarioController = require("../controllers/comentarioController");



// criar comentário em um post

router.post(
    "/posts/:id/comentarios",
    comentarioController.criarComentario
);



// listar comentários de um post

router.get(
    "/posts/:id/comentarios",
    comentarioController.listarComentarios
);



module.exports = router;