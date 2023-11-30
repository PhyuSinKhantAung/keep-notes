import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const NoteInputsForm = () => {
  return (
    <form>
      <div className="border rounded-md md:w-[35%] mx-auto px-2  shadow-background">
        <div className="group">
          <Input
            className="border-0 rounded-none focus:outline-0 "
            placeholder="Title"
          />

          <div className="mt-2 group-focus-within:inline-block hidden w-full">
            <Textarea
              className="border-0 rounded-none focus:outline-0 "
              placeholder="Description"
            />
            <Button variant="ghost" className="float-right my-2">
              Close
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NoteInputsForm;
