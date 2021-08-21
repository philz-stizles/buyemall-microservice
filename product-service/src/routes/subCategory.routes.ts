import express from 'express'
// middlewares
import { requireAuth, authorize } from '@devdezyn/buyemall-common'
// controller
import {
  create,
  read,
  update,
  remove,
  list,
} from '@src/controllers/subCategory.controllers'

const router = express.Router()

// routes
router
  .route('/sub-categories')
  .post(requireAuth, authorize('admin'), create)
  .get(list)

router
  .route('/sub-categories/:slug')
  .get(read)
  .put(requireAuth, authorize('admin'), update)
  .delete(requireAuth, authorize('admin'), remove)

export default router
