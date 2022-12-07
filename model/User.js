const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
    },
    username:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        maxlength:10,
        minlength:4,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        required:true
    }
});
module.exports=mongoose.model("user",userSchema);