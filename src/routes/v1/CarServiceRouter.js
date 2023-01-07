const express = require('express')
const validate = require('../../middlewares/validate')
const carServiceValidation = require('../../validation/CarServiceValidation')
const carServiceController = require('../../controller/CarServiceController')
const auth = require('../../middlewares/auth')

const router = express.Router()

router
  .route('/')
  .post(
    auth,
    validate(carServiceValidation.create),
    carServiceController.create
  )
router.route('/carsc/:carscId').get(auth, carServiceController.findAll)

router
  .route('/:carId')
  .get(
    auth,
    validate(carServiceValidation.findOne),
    carServiceController.findOne
  )
  .patch(
    auth,
    validate(carServiceValidation.update),
    carServiceController.update
  )
  .delete(
    auth,
    validate(carServiceValidation.remove),
    carServiceController.remove
  )

module.exports = router
