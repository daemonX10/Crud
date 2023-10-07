const User = require('../models/userModel.js');

exports.home=(req,res)=>{
    res.send("hello world");
}

exports.createUser = async (req, res) => {
    try {
        const {name, email} = req.body

        if (!name || !email) {
            throw new Error('Name and email are required')
        }

        //check if user is already registered
        const userExists = await User.findOne({email})
        // console.log(userExists);
        if (userExists) {
            throw new Error('User already exists')
        }

        const user = await User.create({
            name,
            email
        })
        console.log(user);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })


    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            messsage: error.message
        })
    }
}

exports.getUser = async(req,res)=>{
    try {
        await User.find({},(err,data)=>{
            if(err){
                throw new Error('Something went wrong')
            }
            res.status(200).json({
                success:true,
                message:"Users fetched successfully",
                data
            })
        });

        // await User.find({})
        // .then((data)=>{
        //     res.status(200).json({
        //         success:true,
        //         message:"Users fetched successfully",
        //         data
        //     })
        // })
        // .catch((err)=>{
        //     console.log(err);
        //     throw new Error('Something went wrong');
        // })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            messsage: error.message
        })
    }
}

exports.editUser = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.deleteUser= async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
