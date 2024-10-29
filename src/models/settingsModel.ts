import { Schema, model } from 'mongoose';

const settingsSchema = new Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
    view: { type: String, required: true },
});

const Settings = model('Settings', settingsSchema);

export default Settings;
