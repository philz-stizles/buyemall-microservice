import express from 'express';
import {
  signupSchema,
  loginSchema,
} from '@src/validation/yup/schemas/user.schema';
import {
  signup,
  signupWithEmailVerification,
  signupWithEmailActivation,
  login,
  forgotPassword,
  resetPassword,
  changePassword,
  logoutCookie,
} from '@src/controllers/auth.controllers';
import validationRequest from '@src/validation/yup/middlewares/yup.validation.middleware';

const router = express.Router();

/**
 *@swagger
 * tags:
 *    name: Auth
 *    description: The Authentication Management APIs
 */

/**
 *@swagger
 * components:
 *  schemas:
 *    Auth:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          description: The email of the new user
 *        password:
 *          type: string
 *          description: A password that contains uppercase, lowercase, numbers and special characters
 *      example:
 *        email: example@somemail.com
 *        password: abcADB123*
 */

/**
 *@swagger
 * /signup:
 *    post:
 *      summary:
 *      tags: [Auth]
 *      responses:
 *        200:
 *          description: For signing up or registering new users
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Auth"
 */
router.post('/signup', validationRequest(signupSchema), signup);

/**
 *@swagger
 * /signup-with-email-verification:
 *    post:
 *      summary:
 *      tags: [Auth]
 *      responses:
 *        200:
 *          description: For signing up or registering new users
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Auth"
 */
router.post(
  '/signup-with-email-verification',
  validationRequest(signupSchema),
  signupWithEmailVerification
);
router.post('/signup-with-email-activation', signupWithEmailActivation);
router.post('/create-business', validationRequest(signupSchema), signup);
router.post('/login', validationRequest(loginSchema), login);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
router.patch('/changePassword', changePassword);
router.get('/logout', logoutCookie);

export default router;
