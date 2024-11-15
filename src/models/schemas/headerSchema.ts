import { Schema } from "mongoose";

export const headerSchema = new Schema({
  viewId: { type: String, required: true },
  title: { type: String, required: true },
});
