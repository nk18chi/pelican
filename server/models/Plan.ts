import mongoose from 'mongoose';

const PlanSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    options: [{ desc: { type: String, required: true } }],
    price: { type: Number, required: true },
  },
  {
    collection: 'Plans',
    timestamps: true,
  }
);

export const Plan = mongoose.model('Plans', PlanSchema);
