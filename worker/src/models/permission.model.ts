import { Schema, model, Document } from 'mongoose';

export interface IPermissionDocument extends Document {
  name: string;
  description: string;
  permissions: string[];
}

// Put as much business logic in the models to keep the controllers as simple and lean as possible
const permissionSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'A permission must have a name'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'A description is required'],
      trim: true,
    },
    isActive: { type: Boolean, default: true, select: false },
  },
  { timestamps: true }
);

const Permission = model<IPermissionDocument>('Permission', permissionSchema);

export default Permission;
