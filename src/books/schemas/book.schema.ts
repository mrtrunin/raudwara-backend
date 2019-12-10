import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  icon: String,
  chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }],
});
