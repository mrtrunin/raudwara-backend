import * as mongoose from 'mongoose';

export const SectionSchema = new mongoose.Schema({
  type: String,
  title: String,
  content: String,
  url: String,
  alt: String,
});
