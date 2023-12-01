import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Tag, Pencil } from "lucide-react";

const LabelsForm = () => {
  return (
    <div>
      <Card className="md:w-[40%] mx-auto rounded-none shadow">
        <CardHeader className="p-4">
          <CardDescription>Edit labels</CardDescription>
        </CardHeader>
        <CardContent>
          <form action="" className="flex justify-around items-center">
            <Tag size={18} />
            <Input
              id="name"
              placeholder="Enter your label"
              className="border-x-0  border-t-0 border-b rounded-none focus:outline-none"
            />
            <hr />
            <Button
              size="icon"
              variant="ghost"
              className=" rounded-full w-10 h-10 p-0 m-0"
            >
              <Check size={18} />
            </Button>
          </form>

          <div className=" flex flex-col gap-y-3 mt-5">
            <div className="flex justify-between items-center cursor-pointer hover:bg-muted p-2 rounded-sm">
              <div className="flex gap-x-2 items-center">
                <Tag size={18} />
                {/* // TODO ** this will be link soon */}
                <span>hehe</span>
              </div>
              <Pencil size={18} />
            </div>
            <div className="flex justify-between items-center cursor-pointer hover:bg-muted p-2 rounded-sm">
              <div className="flex gap-x-2 items-center">
                <Tag size={18} />
                {/* // TODO ** this will be link soon */}
                <span>hehe</span>
              </div>
              <Pencil size={18} />
            </div>{" "}
            <div className="flex justify-between items-center cursor-pointer hover:bg-muted p-2 rounded-sm">
              <div className="flex gap-x-2 items-center">
                <Tag size={18} />
                {/* // TODO ** this will be link soon */}
                <span>hehe</span>
              </div>
              <Pencil size={18} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LabelsForm;
