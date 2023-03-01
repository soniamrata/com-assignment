const userModel = require("../models/userModel.js")
const mongoose = require("mongoose") 

const createUser = async function(req,res){
    try{
    let data = req.body
    let arr = Object.keys(data)
    if(arr.length==0) return res.status(400).send({status:false,message:"can not provide empty body"})
    const savedData = await userModel.create(data)
    return res.status(201).send({status:true,data:savedData})
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}

const getUser = async function (req,res){
    try{

    
    // let userId = req.params.userId
    // if(!userId) return res.status(400).send({status:false,message:"please provide userId in params"})

    const fetchUser = await userModel.find()
    res.status(200).send({status:true,data:fetchUser})
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}

const updateUser = async function(req,res){
    
    try {
        const userId = req.params.id;
        const rating = req.body.rating;
    
        // Check if the user exists
        const user = await userModel.findOne({ _id: userId, isDeleted: false });
        if (!user) {
          return res.status(404).send({ status: false, message: 'User not found' });

        }
        const update = await userModel.findOneAndUpdate(
            { _id: userId, isDeleted: false },
            rating,
            { new: true },
          );
      
          res.status(201).send({ status: true, data: update });
        } catch (error) {
            return res.status(500).send({status:false,message:error.message})
            }
}
module.exports={createUser,getUser,updateUser}

