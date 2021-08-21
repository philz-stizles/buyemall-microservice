import { Router } from 'express'
import {
  create,
  read,
  update,
  remove,
  list,
  getCategorySubs,
} from '@src/controllers/category.controllers'
import { requireAuth } from '@devdezyn/buyemall-common'

const router = Router()

router
  .route('/categories')
  .post(requireAuth, create)
  .get(read)
  .put(requireAuth, update)
  .delete(requireAuth, remove)

router.get('/categories/:_id/subs', getCategorySubs)

export default router
