import { Schema, model, Document, Types } from 'mongoose';

interface IUpload {
  url: string;
  uploadId: string;
}

// 1. Create an type from a document in MongoDB.
export type BusinessDocument = Document & {
  name: string;
  logo: IUpload;
  locations?: string[];
  images?: IUpload[];
  users: Types.ObjectId[];
};

// Put as much business logic in the models to keep the controllers as simple and lean as possible
// 2. Create a Schema corresponding to the document interface.
const businessSchema = new Schema<BusinessDocument>(
  {
    name: {
      type: String,
      required: [true, 'A user must have a name'],
      trim: true,
      unique: true,
    },
    logo: {
      url: String,
      uploadId: String,
    },
    locations: [String],
    images: [
      {
        url: String,
        uploadId: String,
      },
    ],
    users: [{ type: Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

// 3. Create a Model.
const Business = model<BusinessDocument>('Business', businessSchema);

export default Business;
