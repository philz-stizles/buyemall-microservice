import express from 'express';
import {
  addUserCart,
  getUserCart,
  emptyUserCart,
  applyCouponToUserCart,
} from '@src/controllers/cart.controllers';
import { authenticate } from '@src/middlewares/auth.middlewares';

const router = express.Router();

router.use(authenticate);

router
  .route('/carts')
  .post(addUserCart) // save cart
  .get(getUserCart) // get cart
  .delete(emptyUserCart); // empty cart

// Apply coupon
router.post('/carts/coupon', applyCouponToUserCart);

export default router;
