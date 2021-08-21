import { Schema, Types, model, Document } from 'mongoose';

interface IOrderProduct {
  product: Types.ObjectId;
  count: number;
  color: string;
}

export type OrderDocument = Document & {
  products: IOrderProduct[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paymentIntent: any;
  status: string;
  orderedBy: Types.ObjectId;
};

const orderSchema = new Schema<OrderDocument>(
  {
    products: [
      {
        product: { type: Types.ObjectId, ref: 'Product' },
        count: Number,
        color: String,
      },
    ],
    paymentIntent: {},
    status: {
      type: String,
      default: 'Not Processed',
      enum: ['Not Processed', 'processing', 'Dispatched', 'Cancelled', 'Completed'],
    },
    orderedBy: { type: Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

export default model<OrderDocument>('Order', orderSchema);
