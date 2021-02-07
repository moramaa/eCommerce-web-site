import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name:{type:String, required:true},
    rating:{type:Number, required:true},
    comment:{type:String, required:true},

},{
    timestamps:true
})

const productSchema =mongoose.Schema({
    user:{
        type:mpngoose.Schema.Types.ObjectId,
        required:true,
        ref: 'USer'
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    brand:{
        type:Number,
        required:true
    },
    category:{
        type:Boolean,
        required:true,
        default:false
    },
    description:{
        type:Boolean,
        required:true,
        default:false
    },
    rating:{
        type:Boolean,
        required:true,
        default:false
    },
    //arr of reviews
    Reviews:[reviewsSchema],
    numReviews:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    countInStock:{
        type:Number,
        required:true,
        default:0
    },
} ,{
    // Automatic filling
    timestamps:true
})
// creat the product DB 
const Product = mongoose.model('Product',productSchema)

export default Product