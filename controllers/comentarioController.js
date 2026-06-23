const Comentario = require("../models/comentarios");


// criar comentário
exports.criarComentario = async (req, res) => {

    try {


        if (!req.session.usuario) {

            return res.redirect("/loginusuario");

        }



        const novoComentario = new Comentario({

            nome: req.session.usuario.nome,

            texto: req.body.texto,

            postId: req.params.id

        });



        await novoComentario.save();



        res.redirect("/posts/" + req.params.id);



    } catch (err) {


        console.log(err);

        res.status(500)
            .send("Erro ao criar comentário");


    }

};





// listar comentários de um post
exports.listarComentarios = async (req, res) => {

    try {


        const comentarios = await Comentario.find({

            postId: req.params.id

        })
        .sort({
            data: -1
        });



        res.json(comentarios);



    } catch (err) {


        console.log(err);

        res.status(500)
            .send("Erro ao buscar comentários");


    }

};