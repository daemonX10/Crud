const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
        maxlength:[30,"name musht be less than 30 chars"]
    },
    email:{
        type:String,
        required:[true, "email is required"],
        unique:true
    }
});

module.exports = mongoose.model('User',userSchema);