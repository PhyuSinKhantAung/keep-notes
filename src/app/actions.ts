"use server";

import { LoginSchemaType } from "@/components/auth/LoginForm";
import axios from "axios";

export async function handleLoginFormSubmit(data: LoginSchemaType) {
  console.log("here");

  console.log(data);
  const response = await axios.post("/api/login", data);

  console.log("res -->", response);
}
