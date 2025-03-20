import {prismaClient} from "../application/database.js";

export const createTestPicture = async () => {
    await prismaClient.picture.create({
        data: {
            name: "D:\\contact-management-api\\src\\service\\uploaded\\profil.jpg",
            username: "test"
        }
    })
}

export const getTestPicture = async () => {
    return prismaClient.picture.findUnique({
        where: {
            username: "test"
        }
    })
}

export const removeTestPicture = async () => {
    await prismaClient.picture.delete({
        where: {
            username: "test"
        }
    })
}

