import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Copy, ArchiveRestore, Trash2, Pin } from "lucide-react";

const NoteCard = () => {
  return (
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
  );
};

export default NoteCard;
