import path from "path";
import { prismaClient } from "../application/database.js";
import { logger } from "../application/logging.js";
import { ResponseError } from "../error/response-error.js";
import { createPictureValidation, getPictureValidation } from "../validation/picture-validation.js";
import { getUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url); 
// const __dirname = path.dirname(__filename);

const create =  async (userId, request) => {
    const destinationUpload = __dirname + "\\uploaded\\" + request.name;
    validate(createPictureValidation, request.name);
    await request.mv(destinationUpload);
    return prismaClient.picture.create({
        data: {
            name: destinationUpload,
            username: userId
        }
    })
}

const get = async (userId) => {
    const username = validate(getUserValidation, userId);
    const picture = await prismaClient.picture.findUnique({
        where: {
            username: username,
        },
        select: {
            name: true,
            username: true
        }
    })

    if(!picture) {
        throw new ResponseError("Image was not found");
    }

    return picture;
}

export default {create, get}