import mongoose from "mongoose";

const labelSchema = new mongoose.Schema({
  name: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const labelModel =
  mongoose.models.labels || mongoose.model("Label", labelSchema);

export default labelModel;
