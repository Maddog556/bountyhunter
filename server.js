const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()
uri = process.env.URI
const path = require('path')
process.env.SECRET

// Middleware (for every request)
app.use(express.json()) //looks for a request body, ant turns it into 'req.body'
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, "client", "dist")))

// connect to data base 27017 is the default port for local host in mongodb 
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://Josh:jqMYxQEYY@cluster0.3mv0url.mongodb.net/bountydb',
() => console.log("connected to the data base")
)

// Routes
app.use("/bountiesList", require("./routes/bountyRouter.js"))

//Error handler and to have these 4 params 
app.use((err,req,res,next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
   
//server listen//
app.listen(9000, () => {
    console.log("the server is running on Port 9000")

})
