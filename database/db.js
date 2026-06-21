const mongoose = require("mongoose");

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB conectado!");
})
.catch((err) => {
    console.log("Erro no MongoDB:", err);
});

module.exports = mongoose;