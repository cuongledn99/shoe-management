var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
/* GET home page. */
router.get('/', async(req, res, next)=> {
  try {
    let shoes=await mongoose.model('shoes').find();
    console.log(shoes);
    res.render('index', { shoes });
  } catch (error) {
    
  }
  
});

module.exports = router;
