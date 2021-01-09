const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postModel = {
   title : {
      type : String,
      require : true
   },
   body : {
      type : String,
      require : true
   },
   author : {
      type : String,
      require : true
   },
   date : {
      type : Date,
      default : Date.now
   }
};

const PostSchema = new Schema(postModel);
module.exports = mongoose.model('Post', PostSchema)