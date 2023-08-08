
const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty.js")


// mongodb makes its own ids
// this is a mongoose

// Get list 
bountyRouter.get("/", (req,res,next) =>{
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

// Add one 
bountyRouter.post("/", (req,res,next) =>{
    const newBounty = new Bounty(req.body)
    newBounty.save((err,savedBounty) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

// Delete One
// take id for list the use in url in postman then tab delete 
bountyRouter.delete("/:bountyId", (req,res,next)=>{
    Bounty.findOneAndDelete({_id : req.params.bountyId},(err,deleteBounty) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted Bounty ${deleteBounty.firstName} from the Database`)
    })
})

//Update One
bountyRouter.put('/:bountyId', (req,res,next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},// find this one to update
        req.body,//update the object with this data
        {new: true},// send back the updated version please
        (err,updateBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updateBounty)
        }
    )
})

//get by Type
bountyRouter.get("/search/type",(req,res,next) => {
    Bounty.find({type: req.query.type}, (err,bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

module.exports = bountyRouter