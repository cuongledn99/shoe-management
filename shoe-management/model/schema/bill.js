var mongoose=require('mongoose');

var bill=new mongoose.Schema({
    createdDate:{
        type:Date,
        default:Date.now
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    total:{
        type:Number
    }
});

module.exports=bill;