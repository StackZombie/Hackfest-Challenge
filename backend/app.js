const express = require("express")
const PORT = process.env.SERVICE_PORT || 3000
const app = express()
const bodyParser = require("body-parser")
const userRoute = require("./routes/UserRoute");
const channelRoute = require("./routes/ChannelRoute");
const messageRoute = require("./routes/MessageRoute");
// const redisClient = require("./dbconnection/RedisConnection");
// console.log("redis client",redisClient);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/user",userRoute);
app.use("/channel",channelRoute);
app.use("/message",messageRoute);


app.listen(PORT , ()=>{
    console.log(`App is running on PORT ${PORT}`)
    
})