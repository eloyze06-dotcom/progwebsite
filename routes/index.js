const express = require("express");
const router = express.Router();

const Post = require("../models/posts");




// =========================
// HOME
// =========================
router.get("/login", (req,res)=>{

    res.render("login");

});
router.get("/", async (req, res) => {

    try {

        const posts = await Post.find()
            .sort({ data: -1 })
            .limit(3);



        res.render("index", {

            posts: posts

        });



    } catch (err) {


        console.log(err);


        res.status(500)
            .send("Erro ao carregar página inicial");


    }

});





// =========================
// PÁGINA DE LOGIN
// =========================

router.get("/login", (req, res) => {


    res.render("login");


});





module.exports = router;



module.exports = router;