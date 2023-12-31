import NoteModel from '@/models/Note';
import { connectToDB } from './mongodb';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

interface Query {
  search: string;
  pinned: boolean | undefined;
  archived: boolean | undefined;
  trashed: boolean | undefined;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchNotes = async (query: Query) => {
  try {
    connectToDB();
    const { user } = await getServerSession(options);
    const { search, pinned, archived, trashed } = query;

    const notes = await NoteModel.find({
      user: user.id,
      ...(pinned !== undefined ? { pinned } : {}),
      ...(archived !== undefined ? { archived } : {}),
      ...(trashed !== undefined ? { trashed } : {}),
    })
      .sort('-createdAt')
      .select('title description pinned archived trashed');
    // TODO ** You need to remove this soon
    await delay(3000); // Delay for 5 seconds (5000 milliseconds)

    const data = JSON.parse(JSON.stringify(notes));

    noStore();
    return { data, count: notes.length };
  } catch (e) {
    console.log(e);
    throw new Error('Failed to fetch notes');
  }
};
