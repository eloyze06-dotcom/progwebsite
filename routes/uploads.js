const express = require("express");

const router = express.Router();

const upload = require("../config/multer");




// upload de imagens do editor
router.post(
    "/imagem",
    upload.single("imagem"),
    (req, res) => {


        if (!req.file) {

            return res.status(400).json({
                erro: "Nenhuma imagem enviada"
            });

        }



        res.json({

            url: "/uploads/posts/" + req.file.filename

        });



    }
);



module.exports = router;