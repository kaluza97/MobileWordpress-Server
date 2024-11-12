import { Schema, model } from 'mongoose';

const navigationSchema = new Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
    view: { type: String, required: true },
});


const settingsSchema = new Schema({
    navigation: [navigationSchema],
});

const Navigation = model('Navigation', settingsSchema);

export default Navigation;
