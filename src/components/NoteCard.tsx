"use client";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Copy,
  ArchiveRestore,
  Archive,
  Trash2,
  Pin,
  PenSquare,
  FolderSync,
} from "lucide-react";
import { usePathname } from "next/navigation";

const NoteCard = () => {
  const pathname = usePathname();
  const isTrashCard = pathname.includes("/trash");
  const isArchive = pathname.includes("/archive");

  return (
    <Card className="lg:col-span-3 md:col-span-6 col-span-12 bg-background">
      <CardHeader className="p-4">
        <CardDescription>Card Description</CardDescription>
      </CardHeader>

      {isTrashCard ? (
        <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-between">
          <FolderSync size={18} />
        </CardFooter>
      ) : isArchive ? (
        <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-between">
          <PenSquare size={18} />
          <Copy size={18} />
          <Pin size={18} />
          <ArchiveRestore size={18} />
          <Trash2 size={18} />
        </CardFooter>
      ) : (
        <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-between">
          <PenSquare size={18} />
          <Copy size={18} />
          <Pin size={18} />
          <Archive size={18} />
          <Trash2 size={18} />
        </CardFooter>
      )}
    </Card>
  );
};

export default NoteCard;
