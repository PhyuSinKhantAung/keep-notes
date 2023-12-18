import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  auth: {
    google: {
      userId: {
        type: String,
        unique: true,
      },

      valid: {
        type: Boolean,
      },
    },

    email: {
      userMail: {
        type: String,
        unique: true,
      },

      password: {
        type: String,
      },

      valid: {
        type: Boolean,
      },
    },
  },
});

const UserModel = mongoose.models.users || mongoose.model('users', userSchema);

export default UserModel;
