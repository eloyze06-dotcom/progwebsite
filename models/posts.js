const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },


    texto: {
        type: String,
        required: true
    },


    imagem: {
        type: String,
        default: null
    },


    data: {
        type: Date,
        default: Date.now
    },


    autor: {
        type: String,
        default: "lyrae"
    }

});


module.exports = mongoose.model("Post", postSchema);