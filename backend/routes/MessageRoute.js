const route = require("express").Router();

route.get("/get",(req,res)=>{
    res.json({
        status:true,
        message:"message list"
    })
});

module.exports = route;