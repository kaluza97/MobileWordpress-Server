import { Schema, model } from 'mongoose';

const headerSchema = new Schema({
    viewId: { type: String, required: true },
    title: { type: String, required: true },
})

const settingsSchema = new Schema({
    header: [headerSchema]
});

const Header = model('Header', settingsSchema);

export default Header;
