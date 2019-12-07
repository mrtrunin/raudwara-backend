import * as mongoose from 'mongoose';

export const ChapterSchema = new mongoose.Schema({
  title: String,
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Section' }],
});
