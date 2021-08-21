// External libraries
import express from 'express'
// Auth middlewares
import { requireAuth, authorize } from '@devdezyn/buyemall-common'
// Auth controllers
import { create, remove, list } from '@src/controllers/coupon.controllers'

const router = express.Router()

router.use(requireAuth, authorize('admin'))

router.route('/coupons').post(create).get(list)

router.delete('/coupons/:couponId', remove)

export default router
