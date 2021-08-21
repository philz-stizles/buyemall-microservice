import { Router } from 'express';
import {
  create,
  read,
  update,
  remove,
  list,
  getCategorySubs,
} from '@src/controllers/category.controllers';
import { authenticate } from '@src/middlewares/auth.middlewares';
import validateRequest, {
  categoryValidator,
} from '@src/middlewares/validation/express.validator';

const router = Router();

router
  .route('/')
  .post(authenticate, categoryValidator, validateRequest, create)
  .get(list);

router
  .route('/:slug')
  .get(read)
  .put(authenticate, update)
  // /**
  //  *@swagger
  //  * /categories:
  //  *    delete:
  //  *      summary: Delete an existing category
  //  *      tags: [Categories]
  //  *      parameters:
  //  *        - in: path
  //  *          name: slug
  //  *          schema:
  //  *            type: string
  //  *          required: true
  //  *          description: The target category's slug
  //  *      responses:
  //  *        200:
  //  *          description: Request was successful
  //  *          content:
  //  *            application/json:
  //  *              schema:
  //  *                $ref: "#/components/schemas/CategoryInput"
  //  *        401:
  //  *          description: Unauthorized access
  //  *        404:
  //  *          description: Dependency was not found
  //  *        500:
  //  *          description: Server error
  //  */
  .delete(authenticate, remove);

router.get('/categories/:_id/subs', getCategorySubs);

export default router;
