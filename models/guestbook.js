const mongoose = require("mongoose");


const guestbookSchema = new mongoose.Schema({


    nome: {

        type: String,

        required: true

    },



    mensagem: {

        type: String,

        required: true

    },



    data: {

        type: Date,

        default: Date.now

    }


});



module.exports = mongoose.model("Guestbook", guestbookSchema);