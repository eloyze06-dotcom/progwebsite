const Post = require("../models/posts");
const Comentario = require("../models/comentarios");




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


        res.status(500)
            .send("Erro ao carregar posts");


    }

};








// criar novo post (ADMIN)
exports.criarPost = async (req, res) => {

    try {


        if (!req.session.admin) {

            return res.redirect("/login");

        }





        const novoPost = new Post({


            titulo: req.body.titulo,


            conteudo: req.body.conteudo



        });





        await novoPost.save();





        res.redirect("/posts");





    } catch (err) {


        console.log(err);


        res.status(500)
            .send("Erro ao criar post");


    }

};










// apagar post (ADMIN)
exports.apagarPost = async (req, res) => {

    try {


        if (!req.session.admin) {

            return res.redirect("/login");

        }





        await Post.findByIdAndDelete(req.params.id);





        res.redirect("/posts");





    } catch (err) {


        console.log(err);


        res.status(500)
            .send("Erro ao apagar");


    }

};












// mostrar um post específico
exports.verPost = async (req, res) => {

    try {



        const post = await Post.findById(req.params.id);





        if (!post) {


            return res.status(404)
                .send("Post não encontrado");


        }








        const comentarios = await Comentario.find({

            postId: post._id

        })
        .sort({

            data: -1

        });









        res.render("post", {


            post: post,


            comentarios: comentarios


        });






    } catch (err) {


        console.log(err);



        res.status(500)
            .send("Erro ao carregar post");



    }

};