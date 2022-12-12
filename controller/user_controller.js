const userService = require('../services/user_service');
const Userservice = new userService();
const Status = require('http-status')

module.exports = class userController{
    
    async createuser(req, res){
        let user = req.body;
        const result = await Userservice.createuser(user);
          
        if(result){
           res.send(result);
        }else{
            res.status(Status.CREATED).send()
        }
    }
    
    async GetAlluser(req, res, next){
        let user = req.body;
        const result = await Userservice.GetAlluser(user);

        if(result){
           res.send(result);
        }else{
            res.send("error")
        }
    }
    
    async GetuserById(req, res, next){
        const id = req.params.id;
        const result = await Userservice.GetuserById(id);

        if(result){
           res.send(result);
        }else{
            res.status(Status.NOT_FOUND).send()
        }
    }
    
    async DeleteuserById(req, res, next){
        const id = req.params.id;
        
        const result = await Userservice.DeleteuserById(id);

        if(result){
           res.send(result);
        }else{
            res.status(Status.NOT_FOUND).send()
        }
    }
    
    async Updateuser(req, res, next){
        const id = req.params.id;
        let users = req.body;
        
        const result = await Userservice.Updateuser(id, users);

        if(result){
           res.send(result);
        }else{
            res.status(Status.NOT_FOUND).send();
        }
    }
}
