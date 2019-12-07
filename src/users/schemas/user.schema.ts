import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
});
