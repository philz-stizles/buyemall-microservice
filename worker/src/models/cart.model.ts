import { Schema, Types, model, Document } from 'mongoose';

export interface ICartProduct {
  product: { _id: Types.ObjectId };
  count: number;
  color: string;
  price: number;
}

export interface CartDocument {
  products: ICartProduct[];
  cartTotal: number;
  totalAfterDiscount: number;
  orderedBy: Types.ObjectId;
}

export interface ICartDocument extends Document, CartDocument {
  // products: ICartProduct[];
  // cartTotal: number;
  // totalAfterDiscount: number;
  // orderedBy: Types.ObjectId;
}

const cartSchema = new Schema(
  {
    products: [
      {
        product: { type: Types.ObjectId, ref: 'Product' },
        count: Number,
        color: String,
        price: Number,
      },
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
    orderedBy: { type: Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const Cart = model<ICartDocument>('Cart', cartSchema);
export default Cart;
