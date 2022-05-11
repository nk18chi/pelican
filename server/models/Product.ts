import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  },
  {
    collection: 'Products',
    timestamps: true,
  }
);

export const Product = mongoose.model('Products', ProductSchema);
