
const Car = require('../models/CarModels')

const create = async (car) => {
    return Car.create(car);
  };
  
  
  const findAll = async () => {
    
    return await Car.find().exec();
  };
  
  
  const findOne = async (id) => {
    return await Car.findOne({ _id: id }).exec();
  };
  
  
  const update = async (id, car) => {
    return await Car.findOneAndUpdate({ _id: id }, car, { new: true });
  };
  
  
  const remove = async (id) => {
    return await Car.findOneAndDelete({ _id: id });
  };
  
  module.exports = {
    create,
    findAll,
    findOne,
    update,
    remove,
  };
  