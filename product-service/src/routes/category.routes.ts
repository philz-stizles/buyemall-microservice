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

router.route('/').post(requireAuth, create).get(list)

router
  .route('/:slug')
  .get(read)
  .put(requireAuth, update)
  .delete(requireAuth, remove)

router.get('/:_id/subs', getCategorySubs)

export default router
