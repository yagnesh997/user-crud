const httpStatus = require('http-status')
const catchAsync = require('../utils/catchAsync')
const carModels = require('../models/CarModels')

const create = catchAsync(async (req, res) => {
  const { carName, color, modalNo } = req.body

  const newcar = carModels({
    carName,
    color,
    modalNo,
    userId: req.userId
  })

  try {
    await newcar.save()
    res.status(httpStatus.CREATED).json(newcar)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

const findAll = catchAsync(async (req, res) => {
  // res.send(await carService.findAll())
  try {
    const cars = await carModels.find({ userId: req.userId })
    res.status(200).json(cars)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

const findOne = catchAsync(async (req, res) => {
  try {
    const cars = await carModels.findOne({ carId: req.carId })
    res.status(200).json(cars)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

const update = catchAsync(async (req, res) => {
  const id = req.params.carId
  const { carName, color, modalNo } = req.body

  const newcar = {
    carName,
    color,
    modalNo,
    userId: req.userId
  }

  try {
    await carModels.findByIdAndUpdate(id, newcar, { new: true })
    res.status(200).json(newcar)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

const remove = catchAsync(async (req, res) => {
  const id = req.params.carId
  try {
    const car = await carModels.findByIdAndRemove(id)
    res.status(202).json(car)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove
}
