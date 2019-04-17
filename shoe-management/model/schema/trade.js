var mongoose=require('mongoose');

var trade=new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    shoes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'shoes'
    }
});

module.exports=trade;