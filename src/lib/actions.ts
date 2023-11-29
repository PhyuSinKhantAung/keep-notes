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
  console.log("please singout");
  await signOut();
}

// export async function getUserCredentials() {
//   return await auth();
// }

// <HoverCard>
// <HoverCardTrigger>
// <Avatar>
{
  /* <AvatarImage src="https://github.com/shadcn.png" /> */
}

{
  /* {user && (
                  <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
                )} */
}
// </Avatar>
// </HoverCardTrigger>
// <HoverCardContent>
{
  /* {user && user.name} */
}
// <br />
{
  /* {user && user.email} */
}
// </HoverCardContent>
// </HoverCard>;
