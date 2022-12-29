import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Plans',
      required: true,
    },
    stripe: {},
  },
  {
    collection: 'Subscriptions',
    timestamps: true,
  }
);

export const Subscription = mongoose.model('Subscriptions', SubscriptionSchema);
