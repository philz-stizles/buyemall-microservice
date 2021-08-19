import { Schema, Model, model, Document } from 'mongoose'

// Create an interface.
interface PermissionAttrs {
  name: string
  description?: string
}

// An interface that describes the properties that a Permission Document has
interface PermissionDocument extends Document {
  name: string
  description: string
  build(attrs: PermissionAttrs): PermissionDocument
}

// Put as much business logic in the models to keep the controllers as simple and lean as possible
const permissionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      },
    },
  }
)

permissionSchema.statics.build = (attrs: PermissionAttrs) => {
  return new Permission(attrs)
}

// Create a Model.
const Permission = model<PermissionDocument>('Permission', permissionSchema)

export default Permission
