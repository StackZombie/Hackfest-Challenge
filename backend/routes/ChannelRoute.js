const route = require("express").Router();
const {list,joinChannel,leaveChannel,} = require("../controllers/ChannelController");
const router = require("./UserRoute");


// create a new channel
route.post("/save",(req,res)=>{
    try{
        
        res.json({
            status:true,
            message:"Channel Saved"
        })
    }catch(err){
        res.json(err)
    }
   
});


// list all the channels
route.get("/list",async(req,res)=>{
    try{
        const result = await list();
        res.json(result);
    }catch(err){
        res.json(err);
    }
})


// join the channel which will return a message id for user
route.get("/join/:username/:channelName",async(req,res)=>{
    try{
        const username = req.params.username;
        const channelName = req.params.channelName;
        const result = await joinChannel(username,channelName);
        res.json(result);
    }catch(err){
        res.json(err);
    }
})

// leave the channel which will return a different id
router.get("/leave/:username/:channelName",async(req,res)=>{
    try{
        const username = req.params.username;
        const channelName = req.params.channelName;
        const result = await leaveChannel(username,channelName);
        res.json(result);
    }catch(err){
        res.json(err);
    }
})


module.exports = route;