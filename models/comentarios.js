const mongoose = require("mongoose");


const comentarioSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },


    texto: {
        type: String,
        required: true
    },


    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },


    data: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model("Comentario", comentarioSchema);
