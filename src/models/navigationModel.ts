import { Schema, model } from 'mongoose';

const settingsSchema = new Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
    view: { type: String, required: true },
});

const navigationSchema = new Schema({
    header: [{ type: String }],
    content: [{ type: String }],
    navigation: [settingsSchema],
});

const Navigation = model('Navigation', navigationSchema);

export default Navigation;
