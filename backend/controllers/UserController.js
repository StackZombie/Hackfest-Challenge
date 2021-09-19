//
// const redisClient = require("../dbconnection/RedisConnection");\

const redisClient = require("../dbconnection/RedisConnection");



const register =async(user)=>{
    try{
        await console.log("Save User",user);
        const exist = await redisClient.sismember("usernames",usern.username);
        if(1/* exist is true */){
        // const result = await redisClient.sadd('usernames', user.username);
        // await redisClient.hset('user' + ':'+user.username,usern.uername);
        return({
            status:true,
            message:"User Registered Successfully",
            data : "key:user",
            code:200
        })}else{
            return({
                status:false,
                message:"User Already Exist",
                data : null,
                code:400
            }) 
        }
    }catch(err){
        return({
            status:false,
            message:err,
            code:200
        })
    }
};

const search = async({username,city})=>{
    try{    
        await console.log("Search ",username,city);
        //const user = await redisClient.hmget('user:'+username, 'firstname', 'city');
        if(1 /*user exist*/){
            return({
                status:true,
                message:"User Found Successfully",
                data : "{user}"
            })
        }else{
            return({
                status:false,
                code:404,
                message:"user not found"
            })
        }
    }catch(err){
        return({
            status:false,
            message:err,
            code:400
        })
    }
}

const findMe = async(username)=>{
    try{
        //redis find function will come here
        await console.log(uername);
    
        // const userInfo = await redisClient.hgetall("user:"+username);
        // if(userInfo){
        //     return({
        //         status:true,
        //         code:200,
        //         data:userInfo,
        //         message:"details found"
        //     })
        // }else{
        //     return({
        //         status:false,
        //         data:null,
        //         code:404,
        //         message:"details not found",
        //     })
        // }
        return({
            status:200,
            code:200,
            message:"user found",
            data:"{userInfo}"
        })
    }catch(err){
        return({
            status:false,
            message:err,
            code:400
        })
    }
}

module.exports = {register,search,findMe};