const express = require('express');
const validate = require('../../middlewares/validate');
const carScValidation = require('../../validation/CarScValidation');
const carScController = require('../../controller/CarScController');
const auth = require('../../middlewares/auth')

const router = express.Router();

router.route('/').post(auth,validate(carScValidation.create), carScController.create)
router.route('/carsc/:carscId').get(auth,carScController.findAll);

router
  .route('/:carId')
  .get(auth,validate(carScValidation.findOne), carScController.findOne)
  .patch(auth,validate(carScValidation.update), carScController.update)
  .delete(auth,validate(carScValidation.remove), carScController.remove);

module.exports = router;