"use server";
import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

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
