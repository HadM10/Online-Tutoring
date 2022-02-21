// Validation
const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = Joi.object({
        fname: Joi.string().min(3).max(25).required(),
        lname: Joi.string().min(3).max(25).required(),
        email: Joi.string().min(6).max(45).required().email(),
        photo: Joi.string(),
        age: Joi.string().required(),
        password: Joi.string().min(6).max(255).required(),
        phone: Joi.number().min(8).max(45).required(),
        country: Joi.number().min(3).max(45).required()
    });
    return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(45).required().email(),
        password: Joi.string().required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
