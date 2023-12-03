"use client";
import React from "react";
import {
  Card,
  CardContent,
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

const NoteCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const pathname = usePathname();
  const isTrashCard = pathname.includes("/trash");
  const isArchive = pathname.includes("/archive");

  return (
    <Card className="bg-background break-inside-avoid">
      <CardHeader className="p-4">
        <CardDescription>{title}</CardDescription>
      </CardHeader>

      <CardContent className="p-4">
        <p>{description}</p>
      </CardContent>

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
