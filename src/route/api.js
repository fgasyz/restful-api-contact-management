import express from "express";
import userController from "../controller/user-controller.js";
import contactController from "../controller/contact-controller.js";
import addressController from "../controller/address-controller.js";
import {authMiddleware} from "../middleware/auth-middleware.js";
import pictureController from "../controller/picture-controller.js";
import fileUpload from "express-fileupload";

const userRouter = new express.Router();
userRouter.use(authMiddleware);
userRouter.use(fileUpload())

// User API
userRouter.get('/api/users/current', userController.get);
userRouter.patch('/api/users/current', userController.update);
userRouter.delete('/api/users/logout', userController.logout);

// Contact API
userRouter.post('/api/contacts', contactController.create);
userRouter.get('/api/contacts/:contactId', contactController.get);
userRouter.put('/api/contacts/:contactId', contactController.update);
userRouter.delete('/api/contacts/:contactId', contactController.remove);
userRouter.get('/api/contacts', contactController.search);

// Address API
userRouter.post('/api/contacts/:contactId/addresses', addressController.create);
userRouter.get('/api/contacts/:contactId/addresses/:addressId', addressController.get);
userRouter.put('/api/contacts/:contactId/addresses/:addressId', addressController.update);
userRouter.delete('/api/contacts/:contactId/addresses/:addressId', addressController.remove);
userRouter.get('/api/contacts/:contactId/addresses', addressController.list);

// Picture API
userRouter.post('/api/users/:userId/uploads/picture',  pictureController.create);
userRouter.get('/api/users/:userId/picture', pictureController.get);

export {
    userRouter
}
