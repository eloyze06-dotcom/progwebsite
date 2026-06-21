const Post = require("../models/posts");


// mostrar todos os posts
exports.listarPosts = async (req, res) => {

    try {

        console.log("entrei na rota de posts");


        const posts = await Post.find()
            .sort({ data: -1 });


        console.log("posts encontrados:", posts.length);


        res.render("posts", {
            posts: posts
        });


    } catch (err) {

        console.log(err);
        res.status(500).send("Erro ao carregar posts");

    }

};





// criar novo post
exports.criarPost = async (req, res) => {

    try {

        const novoPost = new Post({

            titulo: req.body.titulo,

            texto: req.body.texto,

            imagem: req.body.imagem || null

        });


        await novoPost.save();


        res.redirect("/posts");


    } catch (err) {

        console.log(err);
        res.status(500).send("Erro ao criar post");

    }

};



// apagar post
exports.apagarPost = async (req, res) => {

    try {

        await Post.findByIdAndDelete(req.params.id);

        res.redirect("/posts");


    } catch (err) {

        console.log(err);
        res.status(500).send("Erro ao apagar");

    }

};