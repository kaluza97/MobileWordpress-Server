import { Schema, model } from "mongoose";
import { headerSchema } from "./schemas/headerSchema";
import { mainItemSchema } from "./schemas/mainItemSchema";
import { stackItemSchema } from "./schemas/stackItemSchema";

const appDataSchema = new Schema({
  main: { type: [mainItemSchema], default: [] },
  header: { type: headerSchema, required: true },
  stack: { type: [stackItemSchema], default: [] },
});

const AppData = model("appData", appDataSchema, "appData");

export default AppData;
