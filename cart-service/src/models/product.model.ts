import { Schema, Types, model, Document } from 'mongoose';

interface IUserRating {
  star: number;
  postedBy: Types.ObjectId;
}

export interface IProductDocument extends Document {
  title: string;
  slug: string;
  description: string;
  price: number;
  category: Types.ObjectId;
  subs: Types.ObjectId;
  quantity: number;
  sold: number;
  images: string[];
  shipping: string;
  color: string;
  brand: string;
  ratings: IUserRating[];
}

const productSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
    },
    category: { type: Types.ObjectId, ref: 'Category' },
    subs: [{ type: Types.ObjectId, ref: 'SubCategory' }],
    quantity: Number,
    sold: { type: Number, default: 0 },
    images: { type: Array },
    shipping: { type: String, enum: ['Yes', 'No'] },
    color: {
      type: String,
      enum: ['Black', 'Brown', 'Silver', 'White', 'Blue'],
    },
    brand: {
      type: String,
      enum: ['Apple', 'Samsung', 'Microsoft', 'Lenovo', 'ASUS'],
    },
    ratings: [{ star: Number, postedBy: { type: Types.ObjectId, ref: 'User' } }],
  },
  { timestamps: true }
);

const Product = model<IProductDocument>('Product', productSchema);

export default Product;
