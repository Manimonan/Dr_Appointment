import express from "express";
import { addDoctor } from "../Controllers/adminController.js";
import upload from "../Middlewares/multer.js";

const adminRouter = express.Router();

// API for adding doctor
adminRouter.post("/add-doctor", upload.single("image"), addDoctor);

export default adminRouter;
