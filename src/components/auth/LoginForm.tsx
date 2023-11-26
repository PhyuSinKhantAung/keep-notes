"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { login } from "@/app/actions";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      variant="outline"
      className={`flex-1 ${pending && "opacity-10"}`}
    >
      {pending ? "Processing..." : "Login"}
    </Button>
  );
}

const LoginForm = () => {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <div className=" flex justify-center items-center h-screen ">
      <Toaster />

      <form
        action={formAction}
        className="w-full md:w-[25%] p-4 flex flex-col gap-y-4"
      >
        <h1 className=" text-lg font-bold  text-center">Login</h1>

        <Input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required
        />
        <Input
          type="text"
          placeholder="Password"
          id="password"
          name="password"
          required
        />
        <SubmitButton />
        <div className="flex justify-between items-center">
          <Link href="/signup" className="text-sm p-5">
            Do not have an account?
          </Link>
        </div>
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
