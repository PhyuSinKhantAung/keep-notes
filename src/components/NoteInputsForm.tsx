'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { addNote } from '@/lib/actions';
import React, { useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';

const NoteInputsForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        await addNote(formData);

        ref?.current?.reset();
      }}
      ref={ref}
    >
      <div className="border rounded-md md:max-w-lg mx-auto px-2  shadow-background">
        <div className="group">
          <Input
            className="border-0 rounded-none focus:outline-0 "
            placeholder="Title"
            name="title"
          />

          <div className="mt-2 group-focus-within:inline-block hidden w-full">
            <Textarea
              className="border-0 rounded-none focus:outline-0 "
              placeholder="Description"
              name="description"
            />

            <CloseButton />
          </div>
        </div>
      </div>
    </form>
  );
};

const CloseButton = () => {
  const { pending } = useFormStatus();

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (pending && isEdit) {
      toast('Loading', {
        icon: '⏳',
      });
    } else if (!pending && isEdit) {
      toast('Note added!', {
        icon: '👏',
      });
      setIsEdit(false);
    }
  }, [pending]);

  return (
    <Button
      variant="ghost"
      className={`${pending && 'opacity-10'} float-right my-2`}
      disabled={pending}
      onClick={() => setIsEdit(true)}
    >
      {pending ? 'Submitting...' : 'Close'}
    </Button>
  );
};

export default NoteInputsForm;
