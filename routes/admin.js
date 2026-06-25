const express = require("express");

const router = express.Router();


// página de login admin
router.get("/loginadmin", (req, res) => {

    res.render("loginadmin");

});


// verificar senha admin
router.post("/loginadmin", (req, res) => {


    const senha = req.body.senha;


    if (senha === process.env.ADMIN_PASSWORD) {


        req.session.usuario = null;

        req.session.admin = true;


        return res.redirect("/");


    }


    res.send("senha errada");


});


// logout
router.get("/logout", (req,res)=>{


    req.session.destroy();


    res.redirect("/loginadmin");


});


module.exports = router;