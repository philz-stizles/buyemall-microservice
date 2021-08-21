import { Request, Response } from 'express';
import Coupon from '../models/mongoose/coupon.model';

// create, remove, list

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, expiry, discount } = req.body;
    const newCoupon = await new Coupon({ name, expiry, discount }).save();
    res.json(newCoupon);
  } catch (err) {
    console.log(err);
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json(await Coupon.findByIdAndDelete(req.params.couponId).exec());
  } catch (err) {
    console.log(err);
  }
};

export const list = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json(await Coupon.find({}).sort({ createdAt: -1 }).exec());
  } catch (err) {
    console.log(err);
  }
};
