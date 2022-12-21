const express = require('express');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validation/UserValidation');
const userController = require('../../controller/UserController');

const router = express.Router();

router.route('/').post(validate(userValidation.create), userController.create)
router.route('/alluser').get(userController.findAll);


router
  .route('/:userId')
  .get(validate(userValidation.findOne), userController.findOne)
  .patch(validate(userValidation.update), userController.update)
  .delete(validate(userValidation.remove), userController.remove);

module.exports = router;


