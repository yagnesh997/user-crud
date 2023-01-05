const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { carService } = require('../services');
const carScModels = require("../models/CarScModels")

const create = catchAsync(async (req, res) => {
  
  const {startDate, endDate, carId, serviceMan, serviceType } = req.body;

    const newcar = new carScModels({
    startDate: startDate,
    endDate: endDate,
    carId: carId,
    serviceMan: serviceMan,
    serviceType: serviceType,
    });

    try {
        
        await newcar.save();
        res.status(201).json(newcar);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

const findAll = catchAsync(async (req, res) => {
  

  try {
        
    const cars = await carScModels.find({userId : req.userId});
    res.status(200).json(cars);

} catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
}
});

const findOne = catchAsync(async (req, res) => {
  try {
        
    const cars = await carScModels.findOne({carId : req.carId});
    res.status(200).json(cars);

} catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
}
});

const update = catchAsync(async (req, res) => {
  const id = req.params.carId;
  const {startDate, endDate, carId, serviceMan, serviceType } = req.body;

  const newcar = {
    startDate: startDate,
    endDate: endDate,
    carId: carId,
    serviceMan: serviceMan,
    serviceType: serviceType,
  };

    try {
        await carModels.findByIdAndUpdate(id, newcar, {new : true});
        res.status(200).json(newcar);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

});

const remove = catchAsync(async (req, res) => {
  const id = req.params.carId;
    try {
        
        const car = await carScModels.findByIdAndRemove(id);
        res.status(202).json(car);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};