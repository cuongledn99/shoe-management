var mongoose=require('mongoose');

var billDetail=new mongoose.Schema({
    bill:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'bill'
    },
    shoe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'shoes'
    },
    count:{
        type:Number,
        default:0
    }
});

module.exports=billDetail;