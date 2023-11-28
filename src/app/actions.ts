"use server";

import User from "@/models/User";
import bcrypt from "bcrypt";

interface FormData {
  name: string;
  email: string;
  password: string;
}
export const signup = async (formData: FormData) => {
  const { name, email, password } = Object.fromEntries(
    Object.entries(formData)
  ) as {
    name: string;
    email: string;
    password: string;
  };

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) throw Error("User already exist.");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashedPassword });

    const token = await jwt.sign(
      { id: user._id, email: user.email },
      "thisissecretforjwtjsonwebtokenpayload12345634934340340",
      { expiresIn: "30d" }
    );
  } catch (error: any) {
    throw new Error("Failed to sign up.");
  }
};
