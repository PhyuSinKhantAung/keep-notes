import { auth } from "@/auth";
import NoteModel from "@/models/Note";
import { connectToDB } from "./mongodb";

export const fetchNotes = async () => {
  try {
    connectToDB();
    const { user } = await auth();

    console.log("note user", user);

    const notes = await NoteModel.find({ user: user._id });

    return { data: notes, count: notes.length };
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch notes");
  }
};
