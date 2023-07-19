const Joi = require('joi');

const songValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        artists: Joi.array().min(1).required(),
        url: Joi.string().required()
    })

    return schema.validate(data);
}

module.exports = songValidation;
