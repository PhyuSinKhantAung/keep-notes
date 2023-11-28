"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormErrorText from "../FormErrorText";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { handleLoginFormSubmit } from "@/app/actions";

export const LoginSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z.string().min(6).max(20),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      setIsLoading(true);
      await handleLoginFormSubmit(data);
      router.push("/");
      console.log("hey");
    } catch (error: any) {
      setIsLoading(false);

      console.log(error);
      return toast.error(
        `${
          error.response.status === 500
            ? "Something went wrong!"
            : error.response.data.message
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen ">
      <Toaster />

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-[25%] p-4 flex flex-col gap-y-4"
      >
        <h1 className=" text-lg font-bold  text-center">Login</h1>

        <Input type="email" placeholder="Email" {...register("email")} />
        <FormErrorText errors={errors} fieldname="email" />

        <Input type="text" placeholder="Password" {...register("password")} />
        <FormErrorText errors={errors} fieldname="password" />

        <div className="flex justify-between items-center">
          <Button
            disabled={isLoading ? true : false}
            variant="outline"
            className={`flex-1 ${isLoading && "opacity-10"}`}
          >
            {isLoading ? "Processing..." : "Login"}
          </Button>
          <Link href="/signup" className="text-sm p-5">
            Do not have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
