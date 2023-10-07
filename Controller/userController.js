const User = require('../models/userModel.js');

exports.home=(req,res)=>{
    res.send("hello world");
}

exports.createUser =  (req,res)=>{
    try {
        const {name,email} = req.body;
        if (!name || !email){
            throw new Error ("name and email is required ");
        }

        //  Check if user is already registered

        const userExits = User.findOne({email});

        if(userExits){
            throw new Error ("user already exits");
        }

        const user = User.create({
            name,
            email
        })

        res.send(201).json({
            success: true,
            message:"User created success ",
            user

        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error.message
        })
    }
}