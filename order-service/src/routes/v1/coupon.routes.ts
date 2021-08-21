// External libraries
import express from 'express';
// Auth middlewares
import { authenticate, authorize } from '@src/middlewares/auth.middlewares';
// Auth controllers
import { create, remove, list } from '@src/controllers/coupon.controllers';

const router = express.Router();

router.use(authenticate, authorize('admin'));

router.route('/coupons').post(create).get(list);

router.delete('/coupons/:couponId', remove);

export default router;
