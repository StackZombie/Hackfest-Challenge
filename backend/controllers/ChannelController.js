//const redisClient = require("../dbconnection/RedisConnection");



//get all channels
const list = async()=>{
    try{
        await console.log("finding list");
       // const result = await redisClient.smembers("channels");
        if(1)//founnd
        {
            return({
                status:true,
                message:"Channle List",
                data:"[result]",
                code :200

            })
        }else{

        }
    }catch(err){
        return({
            status:false,
            message:"None",
            code:400
        })
    }
}

const create = async(channelName)=>{
        try{
            await console.log("channel name",channelName);
            //check either the channel already exist or not
            //const exist = await redisClient.smembers("channels",channelName);
            // if exist than return false or else create channel and return true
            if(1 /*exist is true */){
            return({
                status:true,
                data:channelName,
                message:"channel Already Exist",
                code:200
            })} else{
                const result = redisClient.sadd("channels",channelName);
                return({
                    status:true,
                    data:"{result}",
                    message:"New Channel Created",
                    code:200
                })
            }
        }catch(err){
            return({
                status:false,
                message:"None",
                code:400
            }) 
        }
}

const joinChannel = async(channelName, userName)=>{
    try{
        await console.log("Channel ",channelName,userName);
       // const join = await redisClient.xadd("channel:"+channelName+"* type join username",userName);
        return({
            message:"Channel Joined Successfully",
            data : "join.messageid",
            status:true,
            code:200
        })
    }catch(err){
        return({
            status:false,
            message:"Something went wrong",
            code : 400
        })
    }
}

const leaveChannel = async(channelName,userName)=>{
    try{
        await console.log("Channel ",channelName,userName);

       // const leave = await redisClient.xadd("channel:"+channelName+"* type leave username",userName);
        return({
            message:"Channel Left Successfully",
            data : "leave.messageid",
            status:true,
            code:200
        })
    }catch(err){
        return({
            status:false,
            message:"Something went wrong",
            code : 400
        })
    }
}

module.exports = {list,create,joinChannel,leaveChannel};
