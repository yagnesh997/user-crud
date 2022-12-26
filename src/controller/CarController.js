const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { carService } = require('../services');

const create = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).send(await carService.create(req.body));
});

const findAll = catchAsync(async (req, res) => {
  
  res.send(await carService.findAll());
});

const findOne = catchAsync(async (req, res) => {
  const car = await carService.findOne(req.params.carId)
  if (!car)
    res.status(httpStatus.NOT_FOUND).send()
  else
    res.send(car);
});

const update = catchAsync(async (req, res) => {
  const car = await carService.update(req.params.carId, req.body)
  if (!car)
    res.status(httpStatus.NOT_FOUND).send()
  else
    res.send(car);
});

const remove = catchAsync(async (req, res) => {
  const car = await carService.remove(req.params.carId)
  if (!car)
    res.status(httpStatus.NOT_FOUND).send()
  else
    res.send(car);
});

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};