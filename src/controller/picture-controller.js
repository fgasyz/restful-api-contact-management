import pictureService from "../service/picture-service.js";

const create = async (req, res, next) => {
    try {
        const user = req.params.userId;
        const picture = req.files.uploadPicture;
        const mimeType = req.files.uploadPicture.mimetype;
        if(mimeType === "image/jpeg") {
            await pictureService.create(user, picture);
            res.status(200).json({
                data: "Picture was uploaded"
            })
        }else {
            res.status(415).json({
                errors: "File upload is not an allowed type"
            })
        }
    }catch(e) {
        next(e)
    }
}

const get = async (req, res, next) => {
    try {
        const user = req.params.userId;
        const result = await pictureService.get(user);
        res.status(200).json({
            data: {
                image: result
            }
        })
    }catch(e) {
        next(e)
    }
}



export default {create, get}