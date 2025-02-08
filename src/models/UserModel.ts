import mongoose, { Schema, Document } from 'mongoose';

// Interface for User
export interface IUser extends Document {
  email: string,
  fullName: string,
  userName: string,
  phoneNumber: string,
  storeName: string,
  storeTagName: string,
  storePhoneNumber: string,
  storeEmail: string,
  storeCategory: string,
}

// Define the User Schema
const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Your username is required'],
      trim: true,
    },
    fullName: {
      type: String,
      required: [true, 'Your fullname is required'],
      trim: true,
    },
    userName: {
      type: String,
      required: [true, 'Your username is required'],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, 'Store phone number is required'],
      trim: true,
    },
    storeName: {
      type: String,
      required: [true, 'Store name is required'],
      trim: true,
    },
    storeTagName: {
      type: String,
      required: [true, 'Store tag name is required'],
      trim: true,
    },
    storePhoneNumber: {
      type: String,
      required: [true, 'Store phone number is required'],
      trim: true,
    },
    storeEmail: {
      type: String,
      required: [true, 'Store email address is required'],
      trim: true,
    },
    storeCategory: {
      type: String,
      required: [true, 'Store category is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create an index for better search performance on 'title' and 'category'
UserSchema.index({ fullName: 'text', username: 'text', email: 'text' });

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
