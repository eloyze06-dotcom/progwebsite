
require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const session = require("express-session");

const indexRouter = require("./routes/index");

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

  secret: process.env.SESSION_SECRET || "lyra-secret",

  resave: false,

  saveUninitialized: false,

  cookie: {
    httpOnly: true
  }

}));


// =========================
// ROTAS
// =========================

app.use("/", indexRouter);


// =========================
// ERRO 404
// =========================

app.use((req, res) => {

  res.status(404).send("Página não encontrada");

});


// =========================
// EXPORT
// =========================

module.exports = app;