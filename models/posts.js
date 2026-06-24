const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({


    titulo: {

        type: String,

        required: true

    },



    conteudo: {

        type: String,

        required: true

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