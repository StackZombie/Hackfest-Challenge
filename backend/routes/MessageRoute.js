const route = require("express").Router();
const {sendMessage, sendFirstTime,getMessages,getLimitedMessage} =require("../controllers/MessageController");
const router = require("./UserRoute");


// send message to the channel
route.post("/send",async(req,res)=>{
    try{
    const {messageId,username,channelName,message} = req.body;

    const result = (!messageId) 
    ?await sendFirstTime({message ,channelName,message})
    :await sendMessage({messageId,username,channelName,message});
    res.json(result);
    } catch(err){
        res.json(err);
    }
})

// get limited messages for the specific channel 
router.get("/limited/:limit/:channelName",async(req,res)=>{
    try{
        const limit = req.params.limit;
        const result = await getLimitedMessage(limit,channelName);
        return res.json(result);
    }catch(err){
        res.json(err)
    }
})
// get all messages for the specific channel 
router.get("/all/:channelName",async(req,res)=>{
    try{
    const channel = req.params.channelName;
    const result = await getMessages(channel);
    res.json(result);
    }catch(err){
        res.json(err);
    }
})

module.exports = route;