import express from "express";
import cors from "cors";
import "dotenv/config";
import connect from "./db/connect.js";

import CommTypesModel from "./models/comm-types.js";
const app = express();

connect().catch((e) => console.log(e));

app.use(cors());
app.get("/", async (req, res) => {
  try {
    const types = await CommTypesModel.find();
    res.send(types);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
});
app.get("/types/:id", async (req, res) => {
  try {
    const type = await CommTypesModel.findById(req.params.id).withTemplates();
    res.send(type);
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => console.log(`Server listening`));
