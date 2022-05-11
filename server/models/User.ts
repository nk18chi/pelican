import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    collection: 'Users',
    timestamps: true,
  }
);

export const User = mongoose.model('Users', UserSchema);
