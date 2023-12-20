import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.models.users || mongoose.model('users', userSchema);

export default UserModel;
