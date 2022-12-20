
const User = require('../models/user_models')

const create = async (user) => {
    return User.create(user);
  };
  
  
  const findAll = async () => {
    
    return await User.find().exec();
  };
  
  
  const findOne = async (id) => {
    return await User.findOne({ _id: id }).exec();
  };
  
  
  const update = async (id, user) => {
    return await User.findOneAndUpdate({ _id: id }, user, { new: true });
  };
  
  
  const remove = async (id) => {
    return await User.findOneAndDelete({ _id: id });
  };
  
  module.exports = {
    create,
    findAll,
    findOne,
    update,
    remove,
  };
  