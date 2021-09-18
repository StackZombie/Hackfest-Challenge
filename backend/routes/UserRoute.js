const router = require("express").Router()
const {register,search,findMe} = require("../controllers/UserController.js");

// register a user 
router.post("/save",async(req,res)=>{
    const {username,firstname,lastname,city,country} = req.body;
    console.log("Hello world");
    try{
        const result = await register({
            username,
            firstname,
            lastname,
            city,
            country
        });
        res.json(result);
    }catch(err){
        res.json(err);
    }
})

// get a user by username and city
router.get("/search/:username/:city",async(req,res)=>{
    try{
        const username = req.params.username;
        const city = req.params.city;
        const result = await search({username,city});
        res.json(result);
    }catch(err){
        res.json(err);
    }
})
// get details of a single user
router.get("/details/:username",async(req,res)=>{
    try{
        const username = req.params.username;
        const result = await findMe(username);
        res.json(result);
    }catch(err){
        res.json(err);
    }
})

module.exports = router;