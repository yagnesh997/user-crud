const httpStatus = require('http-status')
const catchAsync = require('../utils/catchAsync')
const carServiceModels = require('../models/CarServiceModels')
const mongoose = require('mongoose')

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
    // const cars = await carServiceModels.find({ userId: req.userId })
    const cars = await carServiceModels.aggregate([
      {
        $lookup: {
          from: 'cars',
          localField: 'carId',
          foreignField: '_id',
          as: 'carId',
          pipeline: [
            { $project: { _id: { carname: '$carName', color: '$color' } } },
            { $replaceRoot: { newRoot: '$_id' } }
          ]
        }
      },
      {
        $lookup: {
          from: 'auths',
          localField: 'serviceMan',
          foreignField: '_id',
          as: 'serviceMan',
          pipeline: [
            { $project: { _id: { name: '$username' } } },
            { $replaceRoot: { newRoot: '$_id' } }
          ]
        }
      },
      {
        $lookup: {
          from: 'serviceType',
          localField: 'serviceType',
          foreignField: '_id',
          as: 'serviceType',
          pipeline: [
            { $project: { _id: { name: '$name' } } },
            { $replaceRoot: { newRoot: '$_id' } }
          ]
        }
      }
    ])
    res.status(httpStatus.OK).json(cars)
  } catch (error) {
    console.log(error)
    res.status(httpStatus.NOT_FOUND).json({ message: 'Something went wrong' })
  }
})
// const findAll = catchAsync(async (req, res) => {
//   try {
//     const cars = await carServiceModels.find({ userId: req.userId })
//     res.status(httpStatus.OK).json(cars)
//   } catch (error) {
//     console.log(error)
//     res.status(httpStatus.NOT_FOUND).json({ message: 'Something went wrong' })
//   }
// })

const findOne = catchAsync(async (req, res) => {
  try {
    // const cars = await carServiceModels.findOne({ CarServiceId: req.CarServiceId })
    const id = req.params.CarServiceId

    const car = await carServiceModels.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id)
        }
      },
      {
        $lookup: {
          from: 'cars',
          localField: 'carId',
          foreignField: '_id',
          as: 'carId',
          pipeline: [
            { $project: { _id: { carname: '$carName', color: '$color' } } },
            { $replaceRoot: { newRoot: '$_id' } }
          ]
        }
      },
      {
        $lookup: {
          from: 'auths',
          localField: 'serviceMan',
          foreignField: '_id',
          as: 'serviceMan',
          pipeline: [
            { $project: { _id: { name: '$username' } } },
            { $replaceRoot: { newRoot: '$_id' } }
          ]
        }
      },
      {
        $lookup: {
          from: 'serviceType',
          localField: 'serviceType',
          foreignField: '_id',
          as: 'serviceType',
          pipeline: [
            { $project: { _id: { name: '$name' } } },
            { $replaceRoot: { newRoot: '$_id' } }
          ]
        }
      }
    ])
    res.status(httpStatus.OK).json(car)
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
