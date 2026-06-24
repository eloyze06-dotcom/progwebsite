const mongoose = require("mongoose");


const galeriaSchema = new mongoose.Schema({

    imagem: {

        type: String,

        required: true

    },


    titulo: {

        type: String,

        default: "sem título"

    },


    data: {

        type: Date,

        default: Date.now

    }

});


module.exports = mongoose.model("Galeria", galeriaSchema);