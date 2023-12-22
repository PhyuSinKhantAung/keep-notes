'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Icons } from './Icons';
import { Textarea } from './ui/textarea';
import {
  handleArchiveNote,
  handlePinnedNote,
  handleTrashedNote,
  updateNote,
} from '@/lib/actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import toast from 'react-hot-toast';

const NoteCard = ({
  title,
  description,
  pinned,
  archived,
  trashed,
  id,
}: {
  title: string;
  description: string;
  pinned: boolean;
  archived: boolean;
  trashed: boolean;
  id: string;
}) => {
  const ref = useRef<HTMLFormElement>(null);

  const [open, setOpen] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  return (
    <Card className="bg-background break-inside-avoid ">
      <CardHeader className="p-4">
        <CardDescription>{title}</CardDescription>
      </CardHeader>

      <CardContent className="p-4">
        <p className="line-clamp-5">{description}</p>
      </CardContent>

      {trashed ? (
        <CardFooter className="flex gap-x-2 p-4 justify-start">
          <form action={handleTrashedNote}>
            <input name="noteId" className="hidden" value={id} />
            <UntrashIcon />
          </form>
        </CardFooter>
      ) : (
        <CardFooter className="flex gap-x-2 p-4 md:justify-between justify-start">
          <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger asChild>
              <Icons.pensquare size={18} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] overflow-y-scroll break-kee h-full md:h-[90%] bg-white dark:bg-black">
              <form
                action={async (formData) => {
                  await updateNote({ formData, id });
                  ref?.current?.reset();
                }}
                ref={ref}
              >
                <div className="rounded-md md:max-2xl mx-auto px-2 break-keep overflow-hidden">
                  <Input
                    className="border-0 rounded-none focus:outline-0 "
                    placeholder="Title"
                    name="title"
                    id="title"
                    defaultValue={title}
                  />

                  <Textarea
                    className="border-0  rounded-none focus:outline-0"
                    rows={20}
                    defaultValue={description}
                    name="description"
                    id="description"
                    placeholder="Description"
                  />
                </div>
                <DialogFooter>
                  <EditClose setOpen={setOpen} />
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

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

          {archived ? (
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
          <form action={handleTrashedNote}>
            <input name="noteId" className="hidden" value={id} />
            <TrashIcon />
          </form>
        </CardFooter>
      )}
    </Card>
  );
};

const EditClose = ({ setOpen }: { setOpen: (openValue: boolean) => void }) => {
  const { pending } = useFormStatus();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (pending) {
      toast('Loading', {
        icon: '⏳',
      });
    } else if (!pending && isEdit) {
      toast('Updated!', {
        icon: '👏',
      });
      setOpen(false);
    }
  }, [pending, setOpen]);

  return (
    <Button
      type="submit"
      className="my-4"
      variant="secondary"
      disabled={pending}
      onClick={() => setIsEdit(true)}
    >
      Close
    </Button>
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

const TrashIcon = () => {
  const { pending } = useFormStatus();

  return (
    <Icons.trash
      size={18}
      className={`${pending && 'opacity-10'}`}
    ></Icons.trash>
  );
};

const UntrashIcon = () => {
  const { pending } = useFormStatus();

  return (
    <Icons.trashRestore
      size={18}
      className={`${pending && 'opacity-10'}`}
    ></Icons.trashRestore>
  );
};

export default NoteCard;
