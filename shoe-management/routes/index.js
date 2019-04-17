var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
const authRouter = require('./auth');

const { isLoggedIn } = require('../services/checkPermisstion');


authRouter(router);
require('./checkout')(router)

/* GET home page. */
router.get('/', async(req, res, next)=> {
  try {
    let shoes= await mongoose.model('shoes').find();
    if(req.isAuthenticated()){
      res.render('index', { 
        shoes,
        user:req.user 
      });
    }
    
    res.render('index', { shoes,user:null });
  } catch (error) {
    if(error){
      console.log(error)
    }
  }
  
});



router.use('/order',require('./order'));

module.exports = router;
