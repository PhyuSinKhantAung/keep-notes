// "use client";
// import React from "react";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import { Toaster } from "react-hot-toast";
// import { useFormState, useFormStatus } from "react-dom";
// // import { authenticate } from "@/lib/actions";
// import { AlertCircleIcon } from "lucide-react";

// const LoginForm = () => {
//   // const [state, formAction] = useFormState(authenticate, undefined);

//   return (
//     <div className=" flex justify-center items-center h-screen ">
//       <Toaster />

//       <form
//         // action={formAction}
//         className="w-full md:w-[25%] p-4 flex flex-col gap-y-4"
//       >
//         <h1 className=" text-lg font-bold text-center">Login</h1>

//         <Input type="email" placeholder="Email" name="email" required />

//         <Input type="text" placeholder="Password" name="password" />

//         <div className="flex justify-between items-center">
//           <LoginButton />

//           <Link href="/signup" className="text-sm p-5">
//             Do not have an account?
//           </Link>
//         </div>

//         <div
//           className="flex h-8 items-end space-x-1"
//           aria-live="polite"
//           aria-atomic="true"
//         >
//           {/* {state && (
//             <>
//               <AlertCircleIcon className="h-5 w-5 text-destructive" />
//               <p className="text-sm text-destructive">{state}</p>
//             </>
//           )} */}
//         </div>
//       </form>
//     </div>
//   );
// };

// const LoginButton = () => {
//   const { pending } = useFormStatus();

//   return (
//     <Button
//       variant="outline"
//       aria-disabled={pending}
//       className={`flex-1 ${pending && "opacity-10"}`}
//     >
//       {pending ? "Processing..." : "Login"}
//     </Button>
//   );
// };

// export default LoginForm;
