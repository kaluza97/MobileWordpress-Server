import { Schema, model } from 'mongoose';

const viewSchema = new Schema({
    name: { type: String, required: true }
});

const View = model('View', viewSchema);

export default View;
