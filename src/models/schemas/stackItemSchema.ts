import { Schema } from "mongoose";
import { headerSchema } from "./headerSchema";

export const stackItemSchema = new Schema({
  header: { type: headerSchema, required: true },
  content: { type: [String], default: [] },
  views: { type: [String], default: [] },
});
