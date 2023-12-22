'use server';
import { connectToDB } from './mongodb';
import NoteModel from '@/models/Note';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

export async function addNote(formData: FormData) {
  try {
    connectToDB();

    const session = await getServerSession(options);
    const user = session.user.id;

    const payload = { ...Object.fromEntries(formData), user };

    await NoteModel.create(payload);

    revalidatePath('/notes');
  } catch (error) {
    console.log(error);
    return 'Failed to add note';
  }
}

export async function updateNote({
  formData,
  id,
}: {
  formData: FormData;
  id: string;
}) {
  try {
    connectToDB();

    const update = Object.fromEntries(formData);

    await NoteModel.findByIdAndUpdate(id, update);

    revalidatePath('/notes');
  } catch (error) {
    console.log(error);
    return 'Failed to add note';
  }
}

export async function handlePinnedNote(formData: FormData) {
  try {
    connectToDB();

    const noteId = formData.get('noteId');

    const { pinned } = await NoteModel.findById(noteId);
    const payload = {
      ...(pinned ? { pinned: false } : { pinned: true }),
    };

    await NoteModel.findByIdAndUpdate(noteId, payload);

    revalidatePath('/notes');
  } catch (error) {
    console.log(error);
    return 'Failed to pin note';
  }
}

export async function handleDeleteNote(formData: FormData) {
  try {
    connectToDB();
    const session = await getServerSession(options);
    const user = session.user.id;

    await NoteModel.deleteMany({ user, trashed: true });

    revalidatePath('/notes');
  } catch (error) {
    console.log(error);
    return 'Failed to delete note';
  }
}

export async function handleArchiveNote(formData: FormData) {
  try {
    connectToDB();
    const noteId = formData.get('noteId');
    const { archived } = await NoteModel.findById(noteId);

    const payload = {
      ...(archived ? { archived: false } : { archived: true }),
    };

    await NoteModel.findByIdAndUpdate(noteId, payload, { new: true });

    revalidatePath('/archive');
  } catch (error) {
    console.log(error);
    return 'Failed to archive note';
  }
}

export async function handleTrashedNote(formData: FormData) {
  try {
    connectToDB();
    const noteId = formData.get('noteId');
    const { trashed } = await NoteModel.findById(noteId);

    const payload = {
      ...(trashed ? { trashed: false } : { trashed: true }),
      archived: false,
      pinned: false,
    };

    await NoteModel.findByIdAndUpdate(noteId, payload, { new: true });

    revalidatePath('/trash');
  } catch (error) {
    console.log(error);
    return 'Failed to remove note';
  }
}
