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
import { Icons } from "./Icons";

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
        <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-start">
          <Icons.trashRestore size={18} />
        </CardFooter>
      ) : (
        <CardFooter className="flex gap-x-2 p-4 cursor-pointer justify-start">
          <Icons.pensquare size={18} />
          <Icons.copy size={18} />
          <Icons.pin size={18} />
          {isArchive ? (
            <Icons.archiveRestore size={18} />
          ) : (
            <Icons.archive size={18} />
          )}
          <Icons.delete size={18} />
        </CardFooter>
      )}
    </Card>
  );
};

export default NoteCard;
