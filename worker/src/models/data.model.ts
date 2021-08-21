import { Schema, model, Document } from 'mongoose';

export interface IDataDocument extends Document {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  ipaddress: string;
}

const dataSchema = new Schema(
  {
    firstname: {
      type: String,
      trim: true,
      required: 'Name is required',
      minlength: [2, 'Too short'],
      maxlength: [32, 'Too long'],
    },
    lastname: {
      type: String,
      trim: true,
      required: 'Name is required',
      minlength: [2, 'Too short'],
      maxlength: [32, 'Too long'],
    },
    email: {
      type: String,
      trim: true,
      required: 'Email is required',
    },
    gender: {
      type: String,
    },
    ipaddress: {
      type: String,
    },
  },
  { timestamps: true }
);

const Data = model<IDataDocument>('Data', dataSchema);

export default Data;
