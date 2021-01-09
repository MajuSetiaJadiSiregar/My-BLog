const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = {
   user_name : {
      type : String,
      require : true
   },
   email : {
      type : String,
      require : true
   },
   password : {
      type : String,
      require : true
   }
};

const UserSchema = new Schema(userModel);
module.exports = mongoose.model('users', UserSchema);