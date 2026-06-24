const express = require("express");

const router = express.Router();

const Galeria = require("../models/Galeria");

const upload = require("../config/multer");





// página da galeria

router.get("/galeria", async (req,res)=>{


    const imagens = await Galeria.find()
        .sort({data:-1});



    res.render("galeria", {

        imagens: imagens

    });



});





// upload da imagem (ADMIN)

router.post(
    "/galeria/upload",
    upload.single("imagem"),
    async(req,res)=>{


        if(!req.session.admin){

            return res.redirect("/loginadmin");

        }



        const novaImagem = new Galeria({


            imagem:
            "/uploads/posts/" + req.file.filename



        });



        await novaImagem.save();



        res.redirect("/galeria");


    }

);



module.exports = router;