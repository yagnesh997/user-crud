
const userModel = require('../models/user_models')

module.exports = class userservice{

    async createuser(User){
        
        const userToAdd = new userModel(User)
        
        return await userToAdd.save();
    }

    async GetAlluser(){
        return await userModel.find({});
    }
    
    async GetuserById(id){
        return await userModel.findById(id);
    }
    
    async DeleteuserById(id){
        return await userModel.findByIdAndDelete(id);
    }
    
    async Updateuser(id, user){
        
        return await userModel.findByIdAndUpdate(id , user, { new: true });
        
    }
    
}