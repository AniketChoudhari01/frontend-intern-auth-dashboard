import { body } from "express-validator";

const taskValidator = [body("title").notEmpty()];

export default taskValidator;
