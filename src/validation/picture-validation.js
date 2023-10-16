import Joi from "joi";

const createPictureValidation = Joi.string().required();

const getPictureValidation = Joi.number().positive().required();

const updatePictureValidation = Joi.string().required();

const deletePictureValidation = Joi.number().positive().required();

export {
    createPictureValidation,
    getPictureValidation,
    updatePictureValidation,
    deletePictureValidation
}