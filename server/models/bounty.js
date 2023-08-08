const mongoose = require('mongoose')
const Schema = mongoose.Schema

// for more on schema got you mongoose docs 
//bounty blue print
// you can use all data types here
const bountySchema = new Schema({
   // open a object inside to add more properties
    firstName:{
        type: String,
        require:true
    },
    lastName: {
        type: String,
        require:true
    },
    age: Number,
    type:{
        type:String,
        // enum:["Jedi","jedi","SIth","sith"],
        required:true
    },
    status: String,
})


//this is a method it must have a name and what schema to use 
module.exports = mongoose.model("Bounty",bountySchema)