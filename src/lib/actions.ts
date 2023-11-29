"use server";
import bcrypt from "bcrypt";
import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { connectToDB } from "./mongodb";
import UserModel from "@/models/User";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });
  } catch (error) {
    return "Wrong credentials!";
  }
  redirect("/");
}

export async function logout() {
  await signOut();
  redirect("/login");
}

export async function getUserCredentials() {
  const result = await auth();
  if (!result) return redirect("/login");
  return result;
}

export async function signup(formData: FormData) {
  try {
    console.log("here", Object.fromEntries(formData));
    connectToDB();

    const password = formData.get("password");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password, salt);

    await UserModel.create({
      ...Object.fromEntries(formData),
      password: hashedPassword,
    });
  } catch (error) {
    console.log(error);
    return "Failed to signup user";
  }
  redirect("/");
}
