var mongoose = require('mongoose');
var bycrypt = require('bcrypt-nodejs');

var users = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String,
  },
  roles: [{
    type: String
  }],
  fullname: {
    required: true,
    type: String
  },
  phone:{
      type:String
  },
  address:{
      type:String
  }
})

users.methods.encryptPassword = function (password) {
  return bycrypt.hashSync(password, bycrypt.genSaltSync(10), null);
}
users.methods.validPassword = function (password) {
  return bycrypt.compareSync(password, this.password);
}
module.exports = users;