const Joi = require('joi')
const { objectId } = require('./CustomValidation')

const create = {
  body: Joi.object().keys({
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    carId: Joi.string().required(),
    serviceType: Joi.array().required()
  })
}

const findOne = {
  params: Joi.object().keys({
    CarServiceId: Joi.string().custom(objectId)
  })
}

const update = {
  params: Joi.object().keys({
    CarServiceId: Joi.required().custom(objectId)
  }),
  body: Joi.object()
    .keys({
      startDate: Joi.string().required(),
      endDate: Joi.string().required(),
      carId: Joi.string().required(),
      serviceType: Joi.array().required()
    })
    .min(1)
}

const findByIdAndRemove = {
  params: Joi.object().keys({
    CarServiceId: Joi.string().custom(objectId)
  })
}

module.exports = {
  create,
  findOne,
  update,
  findByIdAndRemove
}
