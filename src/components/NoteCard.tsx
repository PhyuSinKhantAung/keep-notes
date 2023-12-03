"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons";
import { handlePinnedNote } from "@/lib/actions";
import { useFormStatus } from "react-dom";

const NoteCard = ({
  title,
  description,
  pinned,
  id,
}: {
  title: string;
  description: string;
  pinned: boolean;
  id: string;
}) => {
  const pathname = usePathname();
  const isTrashCard = pathname.includes("/trash");
  const isArchive = pathname.includes("/archive");

  // const [state, formAction] = useFormState(handlePinnedNote, undefined);

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
          {pinned ? (
            <form action={handlePinnedNote}>
              <input name="noteId" className="hidden" value={id} />
              <UnpinIcon />
            </form>
          ) : (
            <form action={handlePinnedNote}>
              <input name="noteId" className="hidden" value={id} />
              <PinIcon />
            </form>
          )}

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

const PinIcon = () => {
  const { pending } = useFormStatus();

  return (
    <Icons.pin size={18} className={`${pending && "opacity-10"}`}></Icons.pin>
  );
};

const UnpinIcon = () => {
  const { pending } = useFormStatus();

  return (
    <Icons.unpin
      size={18}
      className={`${pending && "opacity-10"}`}
    ></Icons.unpin>
  );
};

export default NoteCard;
