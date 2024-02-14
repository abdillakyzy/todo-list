import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import {registerValidation, loginValidation} from './validations.js'
import {UserController} from './controlles/index.js'
import {handleValidationError, checkAuth} from "./utils/index.js";


const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect(
        "mongodb+srv://admin:admin@cluster0.jkpjghe.mongodb.net/Todo-List?retryWrites=true&w=majority"
    )
    .then(() => console.log("Db ok"))
    .catch((err) => console.log("Db error"));

app.post(
    "/api/v1/users/login",
    loginValidation,
    handleValidationError,
    UserController.login
)
app.post(
    "/api/v1/users/register",
    registerValidation,
    handleValidationError,
    UserController.register
)

app.get("/api/v1/users/me", checkAuth, UserController.getMe)

const PORT = 5502;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});