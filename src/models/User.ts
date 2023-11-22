import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    unique: true,
  },
});

const User = mongoose.model("users", user);

export default User;
