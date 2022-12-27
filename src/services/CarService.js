
const Car = require('../models/CarModels')

/**
 * Create a car
 * @param {Object} car
 * @returns {Promise<Car>}
 */
const create = async (car) => {
    return Car.create(car);
  };
  
/**
 * Find all car
 * @returns {Promise<Car[]>}
 */
  const findAll = async () => {
    
    return await Car.find().exec();
  };
  
  /**
   * Find a car by id
   * @param {object} id 
   * @returns {Promise<Car>}
   */
  const findOne = async (id) => {
    return await Car.findOne({ _id: id }).exec();
  };
  
  /**
   * Update a car by id
   * @param {object} id 
   * @returns {Promise<Car>}
   */
  const update = async (id, car) => {
    return await Car.findOneAndUpdate({ _id: id }, car, { new: true });
  };
  
  /**
   * Remove a car by id
   * @param {object} id 
   * @returns {Promise<Car>}
   */
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
  