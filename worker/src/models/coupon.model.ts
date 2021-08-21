import { Schema, model, Document } from 'mongoose';

export interface ICouponDocument extends Document {
  name: string;
  expiry: Date;
  discount: number;
  // creator: Types.ObjectId;
}

const couponSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      uppercase: true,
      required: 'Name is required',
      minlength: [6, 'Too short'],
      maxlength: [12, 'Too long'],
    },
    expiry: { type: Date, required: true },
    discount: { type: Number, required: true },
    // creator: { type: Types.ObjectId, ref: 'Business' },
  },
  { timestamps: true }
);

const Coupon = model<ICouponDocument>('Coupon', couponSchema);

export default Coupon;
