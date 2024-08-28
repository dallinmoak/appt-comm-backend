import mongoose from "mongoose";

const CommTypesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const CommTypesModel = mongoose.model("comm-types", CommTypesSchema);

export default CommTypesModel;
