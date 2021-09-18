const express = require("express")
const PORT = process.env.SERVICE_PORT || 3000
const app = express()
const bodyParser = require("body-parser")
const userRoute = require("./routes/UserRoute");
const channelRoute = require("./routes/ChannelRoute");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/user",userRoute);
app.use("/channel",channelRoute);


app.listen(PORT , ()=>{
    console.log(`App is running on PORT ${PORT}`)
    
})