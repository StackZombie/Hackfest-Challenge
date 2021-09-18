const list = async()=>{
    try{
        await console.log("finding list");
        if(1)//founnd
        {
            return({
                status:true,
                message:"Channle List",
                data:"[channel list]",
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
            // if exist than return false or else create channel and return true

            return({
                status:true,
                data:"channel name",
                message:"channel created",
                code:200
            })
        }catch(err){
            return({
                status:false,
                message:"None",
                code:400
            }) 
        }
}

module.exports = {list,create};
