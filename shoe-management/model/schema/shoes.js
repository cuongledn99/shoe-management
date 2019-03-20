var mongoose = require('mongoose');

var shoes=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    provider:{
        type:String,
        required:true
    },
    imageLink:{
        type:String
    },
    exportedDate:{
        type:Date,
        required:true
    },
    bill:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bill'
    },
    boughtBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
});


module.exports = shoes;