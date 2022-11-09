import mongoose from 'mongoose';

const PlanOptionSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    collection: 'PlanOptions',
    timestamps: true,
  }
);

export const PlanOption = mongoose.model('PlanOptions', PlanOptionSchema);
