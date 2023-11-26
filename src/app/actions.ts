// "use server";

// import axios from "axios";
// import { redirect } from "next/navigation";
// import { z } from "zod";

// export async function handleLoginFormSubmit(
//   prevState: any,
//   formData: FormData
// ) {
//   console.log("here");

// const schema = z.object({
//   email: z.string().min(1, "Email is required").email(),
//   password: z.string().min(6).max(20),
// });

// console.log(formData);

// const parse = schema.safeParse({
//   email: formData.get("email"),
//   password: formData.get("password"),
// });

// if (!parse.success)
//   return {
//     message: "Validation failed",
//   };

//   const data = parse.data;

//   console.log(data);

// try {
//   const response = await axios.post("/api/login", data);
//   console.log("res -->", response);
//   return redirect("/");
// } catch (e) {
//   return { message: "Failed to login " };
// }
// }

"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function login(prevState: any, formData: FormData) {
  console.log("jcall");
  const schema = z.object({
    email: z.string().min(1, "Email is required").email(),
    password: z.string().min(6).max(20),
  });

  console.log(formData);

  const parse = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parse.success)
    return {
      message: "Validation failed",
    };

  const data = parse.data;

  console.log("here", data);

  try {
    const response = await axios.post("/api/login", data);
    console.log("res -->", response);
    return redirect("/");
  } catch (e) {
    return { message: "Failed to login " };
  }
}
