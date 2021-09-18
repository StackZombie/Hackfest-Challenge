const register =async(user)=>{
    try{
        await console.log("Save User",user);
        return({
            status:true,
            message:"User Registered Successfully",
            data : "key:user"
        })
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
        if(1){
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
        if(1){
            return({
                status:true,
                code:200,
                data:"{user}",
                message:"details found"
            })
        }else{
            return({
                status:false,
                code:404,
                message:"details not found",
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

module.exports = {register,search,findMe};