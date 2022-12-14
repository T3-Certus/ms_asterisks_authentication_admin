import { check } from "express-validator";
import { validateCreateRequest } from "../utils/methods";

export const registerUserValidator = [
  check(["user_name", "user_surname", "user_document_type", "user_cellphone"])
    .exists()
    .notEmpty()
    .isString(),

  check("user_email").exists().notEmpty().isEmail(),
  check(["user_document_number", "user_password"])
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 8 }),

  (req: any, res: any, next: any) => {
    validateCreateRequest(req, res, next);
  },
];
