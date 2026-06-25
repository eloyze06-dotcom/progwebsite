const express = require("express");

const router = express.Router();

const Post = require("../models/posts");

const postController = require("../controllers/postController");

const upload = require("../config/multer");



// lista de posts
router.get("/", postController.listarPosts);



// formulário de novo post
router.get("/novo", async (req, res) => {

    if (!req.session.admin) {
        return res.redirect("/loginadmin");
    }


    try {

        const posts = await Post.find()
            .sort({ data: -1 });


        res.render("posts", {
            posts: posts
        });


    } catch (err) {

        console.log(err);

        res.status(500)
            .send("Erro ao carregar página");

    }

});



// criar post
router.post(
    "/novo",
    upload.single("imagem"),
    postController.criarPost
);



// ver post específico
router.get("/:id", postController.verPost);



// apagar post
router.post(
    "/apagar/:id",
    postController.apagarPost
);


module.exports = router;