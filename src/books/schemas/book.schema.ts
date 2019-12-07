import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }],
});
