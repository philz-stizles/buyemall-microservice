import { Schema, model, Document, Types } from 'mongoose';

export interface ISubCategoryDocument extends Document {
  name: string;
  slug: string;
  parent: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const subCategorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Name is required',
      minlength: [2, 'Too short'],
      maxlength: [32, 'Too long'],
    },
    slug: { type: String, unique: true, lowercase: true, index: true },
    parent: { type: Types.ObjectId, ref: 'Category', required: true },
  },
  { timestamps: true }
);

const SubCategory = model<ISubCategoryDocument>('SubCategory', subCategorySchema);

export default SubCategory;
