const express = require("express");

const router = express.Router();

const Guestbook = require("../models/guestbook");




// página pública do guestbook

router.get("/guestbook", (req, res) => {


    res.render("guestbook");


});





// enviar mensagem

router.post("/guestbook", async (req, res) => {


    try {


        const novaMensagem = new Guestbook({


            nome: req.body.nome,


            mensagem: req.body.mensagem


        });



        await novaMensagem.save();



        res.redirect("/guestbook");



    } catch (err) {


        console.log(err);


        res.status(500)
            .send("Erro ao enviar mensagem");


    }


});









// painel secreto do admin

router.get("/admin/guestbook", async (req, res) => {



    if (!req.session.admin) {


        return res.redirect("/loginadmin");


    }





    try {



        const mensagens = await Guestbook.find()
            .sort({ data: -1 });





        res.render("admin-guestbook", {

            mensagens: mensagens

        });




    } catch (err) {


        console.log(err);


        res.status(500)
            .send("Erro ao carregar mensagens");


    }



});





module.exports = router;