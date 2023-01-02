const mongoose = require("mongoose");

const authSchema = mongoose.Schema({

    email : {
        type : String,
        required: true
    },
    password : {
        type: String,
        required: true
    }

}, {timestamps : true});

const auth = mongoose.model('auth', authSchema);

module.exports = auth;