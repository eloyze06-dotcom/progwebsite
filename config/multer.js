const multer = require("multer");
const path = require("path");



const storage = multer.diskStorage({


    destination: function (req, file, cb) {


        cb(null, "public/uploads/posts");


    },



    filename: function (req, file, cb) {


        const nomeUnico = Date.now() + "-" + file.originalname;


        cb(null, nomeUnico);


    }


});





const upload = multer({


    storage: storage,


    limits: {

        fileSize: 10 * 1024 * 1024

    },



    fileFilter: function (req, file, cb) {



        const tiposPermitidos = [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif"
        ];



        if (tiposPermitidos.includes(file.mimetype)) {


            cb(null, true);



        } else {


            cb(new Error("Arquivo não é uma imagem válida"));



        }



    }



});




module.exports = upload;