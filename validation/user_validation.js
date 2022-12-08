const joi = require('joi');

const userValidations = {
    creatOrUpdateUserValidator : {
        body: joi.object({
            firstname:joi.string().required(),
            lastname:joi.string().required(),
            phoneno:joi.string().min(10).max(10).required()
        })
    }
}


module.exports =userValidations ;