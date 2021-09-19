//

//const redisClient = require("../dbconnection/RedisConnection");

// send message for first time
const sendFirstTime = async(message)=>{
    try{
        await console.log("create a message id for user with its channel name");
        //once get the message id
        // call sendMessage function with newly generated message and than return 
        // result object will return
        // const messageId = redisClient.xadd("channel:"+message.channelName+"* type message");
        // message.messageId = messageId;
        // const response = await sendMessage(message);
        return({
            status:200,
            message:"Message Sent Successfully",
            data:"messageId",
            success:true
        })
    }catch(err){
        return({
            status:400,
            message:"something went wrong",
            success:false
        })
    }
}

// send a message to channel
const sendMessage = async(message)=>{
    try{
        await console.log("We will write redis function to send message",message);
      //  const result = await redisClient.hset(`message:${message.messageId} channel ${message.channelName} username ${message.userName} message ${message.text}`);
        
        return({
            status:200,
            message:"Message Sent Successfully",
            data:"messageId",
            success:true
        })
    }catch(err){
        return({
            status:400,
            message:"Message not sent",
            success:false
        })
    }
}

//get a message
const getMessages = async(channel)=>{
    try{
        await console.log("We will get all the message id for the specific channel",channel);
        //once the array of id return we will get all messages for those id and return response
        return({
            status:200,
            message:"Messages for the following channel",
            data : "[An array of object of mesages]",
            success:true
        })
    }catch(err){
        return({
            status:400,
            message:"Something went wrong",
            success:false
        })
    }
}

// message limit: 2
const getLimitedMessage = async(limit,channelName)=>{
    try{
        await console.log("We will get all the message id for the specific channel",channelName,limit);
        //once the array of id return we will get all messages for those id and return response
       // const result = await redisClient.xrevrange(`channel:${channelName} + - count ${limit}`)
        return({
            status:200,
            message:"Messages for the following channel",
            data : "result",
            success:true
        })
    }catch(err){
        return({
            status:400,
            message:"Something went wrong",
            success:false
        })
    }
}

module.exports = {sendMessage, getMessages, sendFirstTime, getLimitedMessage};