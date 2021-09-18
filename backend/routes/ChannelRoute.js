const route = require("express").Router();
const {list} = require("../controllers/")

route.get("/save",(req,res)=>{
    res.json({
        status:true,
        message:"Channel Saved"
    })
});


route.get("/list",async(req,res)=>{
    try{
        const result = await list();
        res.json(result);
    }catch(err){
        res.json(err);
    }
})


module.exports = route;