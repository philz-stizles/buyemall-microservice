import Review from '@src/models/mongoose/review.model';
import * as factory from '../factories/handler.factory';

// USING HANDLER FACTORY
export const createReview = factory.createOne(Review);
export const getAllReviews = factory.getAll(Review);
export const getReview = factory.getOne(Review);
export const updateReview = factory.updateOne(Review);
export const deleteReview = factory.deleteOne(Review);
