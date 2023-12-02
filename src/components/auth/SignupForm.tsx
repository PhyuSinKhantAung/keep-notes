"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormErrorText from "../FormErrorText";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { signup } from "@/lib/actions";

const SignupForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const SignupSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email(),
    password: z.string().min(6).max(20),
  });

  type SignupSchemaType = z.infer<typeof SignupSchema>;

  const {
    register,
    formState: { errors, isValid },
    trigger,
  } = useForm<SignupSchemaType>({ resolver: zodResolver(SignupSchema) });

  return (
    <div className=" flex justify-center items-center h-screen ">
      <Toaster />

      <form
        action={async (formData: FormData) => {
          trigger();
          if (!isValid) return;
          return await signup(formData);
        }}
        className="w-full md:w-[25%] p-4 flex flex-col gap-y-4"
      >
        <h1 className=" text-lg font-bold  text-center">Signup</h1>

        <Input type="text" placeholder="Name" {...register("name")} required />
        <FormErrorText errors={errors} fieldname="name" />

        <Input
          type="email"
          placeholder="Email"
          {...register("email")}
          required
        />
        <FormErrorText errors={errors} fieldname="email" />

        <Input
          type="text"
          placeholder="Password"
          {...register("password")}
          required
        />
        <FormErrorText errors={errors} fieldname="password" />

        <div className="flex justify-between items-center">
          <Button
            disabled={isLoading ? true : false}
            variant="outline"
            className={`flex-1 ${isLoading && "opacity-10"}`}
          >
            {isLoading ? "Processing..." : "Signup"}
          </Button>
          <Link href="/login" className="text-sm p-5">
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
