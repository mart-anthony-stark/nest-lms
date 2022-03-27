import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Student firstname is required'],
  },
  middlename: {
    type: String,
    required: [true, 'Student middlename is required'],
  },
  lastname: { type: String, required: [true, 'Student lastname is required'] },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters'],
  },
});
