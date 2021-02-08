import mongoose from 'mongoose'

const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
} ,{
    // Automatic filling
    timestamps:true
})
// creat the user DB 
const User = mongoose.model('USer',userSchema)

export default User