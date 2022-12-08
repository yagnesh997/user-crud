const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/config');
const userRouter = require('./routes/routes')

app.use(express.json());
app.use(userRouter)


mongoose.connect(config.connectionString).then(()=>{
    console.log('Connect');
    app.listen(config.port, ()=>{
        console.log('Listening on port'+ config.port)
    });
}).catch(()=>{
    console.log('Failed to listen on port');
});