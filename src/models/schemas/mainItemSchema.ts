import { Schema } from "mongoose";

export const mainItemSchema = new Schema({
  name: { type: String, required: true },
  view: {
    content: { type: [String], default: [] },
  },
  icon: { type: String, required: true },
});
