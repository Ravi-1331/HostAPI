const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        requried: true,
    },
    price:{
        type: Number, 
        requried: [true, "price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating:{
        type: Number, 
        default: 4.9,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    company:{
        type:String,
        enum: {  // ye is liye kiye q ki hum log ko itna hi compnay chahiye jb koi or compnay aayega to message dega jo niche likha hua
            values: ["apple", "sumsung", "dell", "mi"],
            message: `{VALUE} is not supported`
        },
    },
});

module.exports = mongoose.model('Product', productSchema);