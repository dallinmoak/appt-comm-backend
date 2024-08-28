import mongoose from "mongoose";
import "dotenv/config";
mongoose.set("strictQuery", false);

const connect = async () => {
  await mongoose.connect(process.env.ATLAS_URI);
};

export default connect;
