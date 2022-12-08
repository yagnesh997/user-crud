const express = require('express');
const userController = require('../controller/user_controller');

const UserController = new userController();
const userValidator = require('../validation/user_validation')
const {validate} = require('express-validation')

const router = express.Router()

router.post('/create', validate(userValidator.creatOrUpdateUserValidator), UserController.createuser);
router.get('/user/all', UserController.GetAlluser);
router.get('/user/userById', UserController.GetuserById);
router.delete('/delete', UserController.DeleteuserById);
router.put('/update/:id', validate(userValidator.creatOrUpdateUserValidator), UserController.Updateuser);

module.exports = router;
