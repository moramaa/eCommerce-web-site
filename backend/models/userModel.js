import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

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

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

// creat the user DB 
const User = mongoose.model('USer',userSchema)

export default User



