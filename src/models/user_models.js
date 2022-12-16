

const mongoose = require('mongoose');

const userSchema = new  mongoose.Schema({

        firstname:{
                type:String
        },
        lastname:{
                type:String
        },
        phoneno:{
                type:String
        }
        
      
      
})

module.exports = mongoose.model('User',userSchema)