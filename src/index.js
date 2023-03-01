
const express = require("express")
const app = express()
const { default: mongoose } = require('mongoose')
const route = require("./routes/route")

app.use(express.json()) //express has inbuilt function to parse data.

mongoose.connect("mongodb+srv://Amrata:Y99l58O8175g88R8@cluster0.xictrjh.mongodb.net/Techvilla-DB", { useNewUrlParser: true })

.then(()=> console.log("MongoDb is connected"))
.catch( err => console.log(err))

app.use('/', route)

app.listen(3000,function(){
    console.log("express app running on the port 3000")
})