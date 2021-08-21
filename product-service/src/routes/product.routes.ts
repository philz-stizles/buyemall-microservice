import express from 'express'
import {
  create,
  list,
  read,
  update,
  remove,
  setProductRating,
  listRelatedProducts,
  getProductsTotal,
  listAll,
  uploadFile,
  removeFile,
} from '@src/controllers/product.controllers'
import { requireAuth, authorize } from '@devdezyn/buyemall-common'

const router = express.Router()

router.route('/').post(requireAuth, authorize('admin'), create).get(listAll)

router.post('/products/filtered', list)

router.get('/products/total', getProductsTotal)

router.post('/upload', requireAuth, authorize('admin'), uploadFile)
router.post('/remove-file', requireAuth, authorize('admin'), removeFile)

router
  .route('/products/:slug')
  .get(read)
  .put(requireAuth, authorize('admin'), update)
  .delete(requireAuth, authorize('admin'), remove)

router.put('/products/:productId/set-rating', requireAuth, setProductRating)

router.get('/products/:productId/related', listRelatedProducts)

// router.post("/search/filters", searchFilters);

export default router
