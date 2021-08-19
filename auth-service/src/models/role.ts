import { Schema, model, Document } from 'mongoose'

// Create an interface.
interface RoleAttrs {
  name: string
  description: string
  roles: string[]
}

// An interface that describes the properties that a Role Document has
interface RoleDocument extends Document {
  name: string
  description: string
  build(attrs: RoleAttrs): RoleDocument
}

// Put as much business logic in the models to keep the controllers as simple and lean as possible
const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    roles: [{ type: Schema.Types.ObjectId, ref: 'Permission' }],
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

roleSchema.statics.build = (attrs: RoleAttrs) => {
  return new Role(attrs)
}

// Create a Model.
const Role = model<RoleDocument>('Role', roleSchema)

export default Role
