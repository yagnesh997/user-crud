const jwt = require("jsonwebtoken");
const config = require('../config/config');

const auth = (req, res, next)=>{

    try {

        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let car = jwt.verify(token, config.secretkey );
            req.carId = car.id;
        }
        else{
            return res.status(401).json({message: "Unauthorized User"});
        }

        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Unauthorized User"});
    }

}

module.exports = auth;