import express from 'express';
// middlewares
import { authenticate, authorize } from '@src/middlewares/auth.middlewares';
// controller
import {
  create,
  read,
  update,
  remove,
  list,
} from '@src/controllers/subCategory.controllers';

const router = express.Router();

// routes
router
  .route('/sub-categories')
  .post(authenticate, authorize('admin'), create)
  .get(list);

router
  .route('/sub-categories/:slug')
  .get(read)
  .put(authenticate, authorize('admin'), update)
  .delete(authenticate, authorize('admin'), remove);

export default router;
