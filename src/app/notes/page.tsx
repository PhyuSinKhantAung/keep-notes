import React from "react";
import NoteInputsForm from "@/components/NoteInputsForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copy, ArchiveRestore, Trash2, Pin } from "lucide-react";

const page = () => {
  return (
    <div>
      <NoteInputsForm />

      <div className="grid grid-cols-12 gap-y-4 gap-x-4 p-16">
        <small className="col-span-12">Pinned</small>

        <Card className="lg:col-span-3 md:col-span-6 col-span-12 bg-background">
          <CardHeader className="p-4">
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-between">
            <Copy size={18} />
            <ArchiveRestore size={18} />
            <Trash2 size={18} />
            <Pin size={18} />
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-12  gap-y-4 gap-x-4 p-16">
        <small className="col-span-12">Others</small>
        <Card className="lg:col-span-3 md:col-span-6 col-span-12 bg-background">
          <CardHeader className="p-4">
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-between">
            <Copy size={18} />
            <ArchiveRestore size={18} />
            <Trash2 size={18} />
            <Pin size={18} />
          </CardFooter>
        </Card>
        <Card className="lg:col-span-3 md:col-span-6 col-span-12 bg-background">
          <CardHeader className="p-4">
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-between">
            <Copy size={18} />
            <ArchiveRestore size={18} />
            <Trash2 size={18} />
            <Pin size={18} />
          </CardFooter>
        </Card>{" "}
        <Card className="lg:col-span-3 md:col-span-6 col-span-12 bg-background">
          <CardHeader className="p-4">
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-between">
            <Copy size={18} />
            <ArchiveRestore size={18} />
            <Trash2 size={18} />
            <Pin size={18} />
          </CardFooter>
        </Card>{" "}
        <Card className="lg:col-span-3 md:col-span-6 col-span-12 bg-background">
          <CardHeader className="p-4">
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-between">
            <Copy size={18} />
            <ArchiveRestore size={18} />
            <Trash2 size={18} />
            <Pin size={18} />
          </CardFooter>
        </Card>{" "}
        <Card className="lg:col-span-3 md:col-span-6 col-span-12 bg-background">
          <CardHeader className="p-4">
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-between">
            <Copy size={18} />
            <ArchiveRestore size={18} />
            <Trash2 size={18} />
            <Pin size={18} />
          </CardFooter>
        </Card>{" "}
        <Card className="lg:col-span-3 md:col-span-6 col-span-12 bg-background">
          <CardHeader className="p-4">
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-between">
            <Copy size={18} />
            <ArchiveRestore size={18} />
            <Trash2 size={18} />
            <Pin size={18} />
          </CardFooter>
        </Card>{" "}
        <Card className="lg:col-span-3 md:col-span-6 col-span-12 bg-background">
          <CardHeader className="p-4">
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-between">
            <Copy size={18} />
            <ArchiveRestore size={18} />
            <Trash2 size={18} />
            <Pin size={18} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
