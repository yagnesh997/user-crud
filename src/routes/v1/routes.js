const express = require('express');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validation/user_validation');
const userController = require('../../controller/user_controller');

const router = express.Router();

router.route('/').post(validate(userValidation.create), userController.create).get(userController.findAll);

router
  .route('/:id')
  .get(validate(userValidation.findOne), userController.findOne)
  .patch(validate(userValidation.update), userController.update)
  .delete(validate(userValidation.remove), userController.remove);

module.exports = router;
