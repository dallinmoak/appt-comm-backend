import mongoose from "mongoose";
import TemplatesModel from "./templates.js";

const CommTypesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    methods: {
      getTemplates() {
        return TemplatesModel.find({ commType: this._id });
      },
    },
  }
);

const CommTypesModel = mongoose.model("comm-types", CommTypesSchema);

export default CommTypesModel;
