'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { usePathname } from 'next/navigation';
import { Icons } from './Icons';
import {
  handleArchiveNote,
  handleDeleteNote,
  handlePinnedNote,
} from '@/lib/actions';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from './ui/textarea';

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
  const isTrashCard = pathname.includes('/trash');
  const isArchive = pathname.includes('/archive');

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
        <CardFooter className="flex gap-x-2 p-4 cursor-pointer md:justify-between justify-start">
          <Dialog>
            <DialogTrigger asChild>
              <Icons.pensquare size={18} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-black">
              <form>
                <div className="rounded-md md:max-2xl mx-auto px-2">
                  <Input
                    className="border-0 rounded-none focus:outline-0 "
                    placeholder="Title"
                    name="title"
                  />

                  <Textarea
                    className="border-0 rounded-none focus:outline-0 resize-none"
                    placeholder="Description"
                    name="description"
                  />
                </div>
                <DialogFooter>
                  <Button type="submit">Close</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          {/* <Icons.pensquare size={18} /> */}
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
            <form action={handleArchiveNote}>
              <input name="noteId" className="hidden" value={id} />
              <UnarchiveIcon />
            </form>
          ) : (
            <form action={handleArchiveNote}>
              <input name="noteId" className="hidden" value={id} />
              <ArchiveIcon />
            </form>
          )}
          <form action={handleDeleteNote}>
            <input name="noteId" className="hidden" value={id} />
            <DeleteIcon />
          </form>
        </CardFooter>
      )}
    </Card>
  );
};

const PinIcon = () => {
  const { pending } = useFormStatus();

  return (
    <Icons.pin size={18} className={`${pending && 'opacity-10'}`}></Icons.pin>
  );
};

const UnpinIcon = () => {
  const { pending } = useFormStatus();

  return (
    <Icons.unpin
      size={18}
      className={`${pending && 'opacity-10'}`}
    ></Icons.unpin>
  );
};

const ArchiveIcon = () => {
  const { pending } = useFormStatus();

  return (
    <Icons.archive
      size={18}
      className={`${pending && 'opacity-10'}`}
    ></Icons.archive>
  );
};

const UnarchiveIcon = () => {
  const { pending } = useFormStatus();

  return (
    <Icons.archiveRestore
      size={18}
      className={`${pending && 'opacity-10'}`}
    ></Icons.archiveRestore>
  );
};

const DeleteIcon = () => {
  const { pending } = useFormStatus();

  return (
    <Icons.delete
      size={18}
      className={`${pending && 'opacity-10'}`}
    ></Icons.delete>
  );
};

export default NoteCard;
