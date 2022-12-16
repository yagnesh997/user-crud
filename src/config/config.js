const dotenv = require('dotenv');
const path = require('path');
// require('dotenv').config({path: '../../.env'});
dotenv.config({ path: path.join(__dirname, '../../.env') });


module.exports = {
    
    port: process.env.PORT,
    connectionString : process.env.CONNECTION_STRING
}