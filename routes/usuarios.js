const express = require("express");

const router = express.Router();

const Usuario = require("../models/usuarios");



// página de cadastro
router.get("/cadastro", (req, res) => {

    res.render("cadastro");

});




// criar usuário
router.post("/cadastro", async (req, res) => {

    try {


        const novoUsuario = new Usuario({

            nome: req.body.nome,

            email: req.body.email,

            senha: req.body.senha

        });



        await novoUsuario.save();



        res.redirect("/loginusuario");



    } catch (err) {


        console.log(err);

        res.status(500)
            .send("Erro ao cadastrar usuário");


    }

});





// página de login
router.get("/loginusuario", (req, res) => {

    res.render("loginusuario");

});





// fazer login
router.post("/loginusuario", async (req, res) => {

    try {


        const usuario = await Usuario.findOne({

            email: req.body.email,

            senha: req.body.senha

        });



        if (!usuario) {

            return res.send("Usuário ou senha incorretos");

        }



        req.session.usuario = {

            id: usuario._id,

            nome: usuario.nome

        };



        res.redirect("/");



    } catch (err) {


        console.log(err);

        res.status(500)
            .send("Erro no login");


    }

});





// logout usuário
router.get("/logoutusuario", (req, res) => {


    delete req.session.usuario;


    res.redirect("/");



});




module.exports = router;