var mongoose = require('mongoose');
var schema = require('./schema/index');

module.exports = {
  users: mongoose.model('users', schema.users),
  shoes: mongoose.model('shoes',schema.shoes),
  bill: mongoose.model('bill',schema.bill),
  billDetail: mongoose.model('billDetail',schema.billDetail)
}