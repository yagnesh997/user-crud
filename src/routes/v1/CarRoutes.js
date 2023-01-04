const express = require('express');
const validate = require('../../middlewares/validate');
const carValidation = require('../../validation/CarValidation');
const carController = require('../../controller/CarController');
const auth = require('../../middlewares/auth')

const router = express.Router();

router.route('/').post(auth,validate(carValidation.create), carController.create)
router.route('/car/:carId').get(auth,carController.findAll);

router
  .route('/:carId')
  .get(auth,validate(carValidation.findOne), carController.findOne)
  .patch(auth,validate(carValidation.update), carController.update)
  .delete(auth,validate(carValidation.remove), carController.remove);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: Car crud
 */

/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Create a car
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - carName
 *               - color
 *               - modalNo
 *             properties:
 *               carName:
 *                 type: string
 *               color:
 *                 type: string
 *               modalNo:
 *                 type: string
 *             example:
 *               carName: virtus
 *               color: blur
 *               modalNo: "2023"
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Car'
 *       "400":
 *          description: Valication error
 *
 *   get:
 *     summary: Get all cars
 *     tags: [Cars]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'  
 */

/**
 * @swagger
 * /cars/{id}:
 *   get:
 *     summary: Get a car by id
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Car id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Car'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a car
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Car id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - carName
 *               - color
 *               - modalNo
 *             properties:
 *               carName:
 *                 type: string
 *               color:
 *                 type: string
 *               modalNo:
 *                 type: string
 *             example:
 *               carName: virtus
 *               color: blur
 *               modalNo: "2023"
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Car'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a car
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Car id
 *     responses:
 *       "200":
 *         description: No content
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Car'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
