// import { auth } from "@/auth";
import NoteModel from "@/models/Note";
import { connectToDB } from "./mongodb";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

interface Query {
  search: string;
  pinned: boolean;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchNotes = async (query: Query) => {
  try {
    connectToDB();
    // const { user } = await auth();
    const { search, pinned = false } = query;

    const notes = await NoteModel.find({
      // user: user._id,
      pinned,
    });
    // TODO ** You need to remove this soon
    await delay(3000); // Delay for 5 seconds (5000 milliseconds)

    noStore();
    return { data: notes, count: notes.length };
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch notes");
  }
};

export const pinnedNote = async (id: string) => {
  try {
    await NoteModel.findByIdAndUpdate(id, { pinned: true });

    revalidatePath("/notes");
  } catch (e) {
    throw new Error("Failed to pin the note");
  }
};
