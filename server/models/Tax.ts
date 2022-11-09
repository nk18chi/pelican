import mongoose from 'mongoose';

const TaxSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    percentage: { type: Number, required: true },
  },
  {
    collection: 'Taxes',
    timestamps: true,
  }
);

export const Tax = mongoose.model('Taxes', TaxSchema);
