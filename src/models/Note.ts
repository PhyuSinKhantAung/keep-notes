import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
  label: {
    type: mongoose.Types.ObjectId,
    ref: "Label",
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  pinned: {
    type: Boolean,
    default: false,
  },
});

const NoteModel = mongoose.models.notes || mongoose.model("notes", noteSchema);

export default NoteModel;
