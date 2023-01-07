const httpStatus = require('http-status')
const catchAsync = require('../utils/catchAsync')
const carServiceModels = require('../models/CarServiceModels')

const create = catchAsync(async (req, res) => {
  const { startDate, endDate, carId, serviceType } = req.body

  const newcar = carServiceModels({
    startDate,
    endDate,
    carId,
    serviceMan: req.userId,
    serviceType
  })

  try {
    await newcar.save()
    res.status(httpStatus.CREATED).json(newcar)
  } catch (error) {
    console.log(error)
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: 'Something went wrong' })
  }
})

const findAll = catchAsync(async (req, res) => {
  try {
    const cars = await carServiceModels.find({ userId: req.userId })
    res.status(httpStatus.OK).json(cars)
  } catch (error) {
    console.log(error)
    res.status(httpStatus.NOT_FOUND).json({ message: 'Something went wrong' })
  }
})

const findOne = catchAsync(async (req, res) => {
  try {
    const cars = await carServiceModels.findOne({ carId: req.carId })
    res.status(httpStatus.OK).json(cars)
  } catch (error) {
    console.log(error)
    res.status(httpStatus.NOT_FOUND).json({ message: 'Something went wrong' })
  }
})

const update = catchAsync(async (req, res) => {
  const id = req.params.CarServiceId
  const { startDate, endDate, carId, serviceType } = req.body

  const newcar = {
    startDate,
    endDate,
    carId,
    serviceMan: req.userId,
    serviceType
  }

  try {
    await carServiceModels.findByIdAndUpdate(id, newcar, { new: true })
    res.status(httpStatus.OK).json(newcar)
  } catch (error) {
    console.log(error)
    res.status(httpStatus.NOT_FOUND).json({ message: 'Something went wrong' })
  }
})

const remove = catchAsync(async (req, res) => {
  const id = req.params.CarServiceId
  try {
    const car = await carServiceModels.findByIdAndRemove(id)
    res.status(httpStatus.ACCEPTED).json(car)
  } catch (error) {
    console.log(error)
    res.status(httpStatus.NOT_FOUND).json({ message: 'Something went wrong' })
  }
})

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove
}
