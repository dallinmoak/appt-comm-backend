import mongoose from "mongoose";

const TemplatesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
  },
  commType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comm-types",
  },
});

const TemplatesModel = mongoose.model("templates", TemplatesSchema);

export default TemplatesModel;
