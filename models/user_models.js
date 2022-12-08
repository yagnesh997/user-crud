

const mongoose = require('mongoose');

const userSchema = new  mongoose.Schema({
        firstName:String,
        lastName:String, 
        phoneNo: String
      
      
})

module.exports = mongoose.model('User',userSchema)