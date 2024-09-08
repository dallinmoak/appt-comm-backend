import mongoose from "mongoose";
import TemplatesModel from "./templates.js";
import { withChildren } from "./helpers/withChildren.js";

const CommTypesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    query: {
      async withTemplates() {
        return withChildren(TemplatesModel, "commType", "templates", this);
      },
    },
  }
);

const CommTypesModel = mongoose.model("comm-types", CommTypesSchema);

export default CommTypesModel;
