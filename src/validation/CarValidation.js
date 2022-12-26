const Joi = require('joi');
const { objectId } = require('./CustomValidation');

const create = {
  body: Joi.object().keys({
    carName: Joi.string().required(),
    color: Joi.string().required(),
    modalNo: Joi.string().required().min(4).max(4),
  }),
};

const findOne = {
  params: Joi.object().keys({
    carId: Joi.string().custom(objectId),
  }),
};

const update = {
  params: Joi.object().keys({
    carId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      carName: Joi.string().required(),
      color: Joi.string().required(),
      modalNo: Joi.string().required().min(4).max(4),
    })
    .min(1),
};

const remove = {
  params: Joi.object().keys({
    carId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  findOne,
  update,
  remove,
};