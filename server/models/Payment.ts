import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plans' },
    planOptions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PlanOptions' }],
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    stripe: {},
  },
  {
    collection: 'Payments',
    timestamps: true,
  }
);

export const Payment = mongoose.model('Payments', PaymentSchema);
