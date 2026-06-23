require("dotenv").config();

require("./database/db");


const express = require("express");
const path = require("path");
const cors = require("cors");
const session = require("express-session");



const indexRouter = require("./routes/index");
const postsRouter = require("./routes/posts");
const adminRouter = require("./routes/admin");
const usuariosRouter = require("./routes/usuarios");
const comentariosRouter = require("./routes/comentarios");


const app = express();




// =========================
// CONFIGURAÇÃO EJS
// =========================

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");






// =========================
// MIDDLEWARES
// =========================

app.use(cors());


app.use(express.json());


app.use(express.urlencoded({

    extended: false

}));


app.use(express.static(

    path.join(__dirname, "public")

));








// =========================
// SESSÃO
// =========================

app.use(session({

    secret: process.env.SESSION_SECRET || "lyrae-secret",

    resave: false,

    saveUninitialized: false,

    cookie: {

        httpOnly: true

    }

}));




// mandar informações da sessão para o EJS

app.use((req, res, next) => {


    res.locals.admin = req.session.admin;


    res.locals.usuario = req.session.usuario;


    next();


});








// =========================
// ROTAS
// =========================

app.use("/", indexRouter);


app.use("/", adminRouter);


app.use("/", usuariosRouter);


app.use("/posts", postsRouter);


app.use("/", comentariosRouter);








// =========================
// ERRO 404
// =========================

app.use((req, res) => {


    res.status(404)
        .send("Página não encontrada");


});








// =========================
// EXPORT
// =========================

module.exports = app;