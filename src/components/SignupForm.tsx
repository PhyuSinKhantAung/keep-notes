import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SignupForm = () => {
  return (
    <div className=" flex justify-center items-center h-screen ">
      <form action="" className="w-full md:w-[25%] p-4 flex flex-col gap-y-4">
        <h1 className=" text-lg font-bold  text-center">Signup</h1>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Password" />

        <div className="flex justify-between items-center">
          <Button variant="outline" className="flex-1">
            Signup
          </Button>
          <a href="" className="text-sm p-5">
            Already have an account?
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
