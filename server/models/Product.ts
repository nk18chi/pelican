import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    isNewItem: { type: Boolean },
    imageURL: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number },
    numReviews: { type: Number },
  },
  {
    collection: 'Products',
    timestamps: true,
  }
);

export const Product = mongoose.model('Products', ProductSchema);
