const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"name is required"],
        trim:true,
        maxlength:[30,"name musht be less than 30 chars"]
    }
})