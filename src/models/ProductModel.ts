import { categoryList } from '@/utils/data';
import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid'; // Import UUID to generate unique ids

// Define the Product interface extending Mongoose's Document
export interface IProduct extends Document {
  id: string; // Custom id field
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

// Create the Product schema
const ProductSchema: Schema = new Schema(
  {
    // Custom 'id' field with default UUID value
    id: {
      type: String,
      // default: () => uuidv4(), // Generate a unique id using a function to call UUID
      unique: true, // Ensure uniqueness of the custom 'id' field
    },
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price cannot be negative'],
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
      trim: true,
      enum: categoryList,
    },
    description: {
      type: String,
      trim: true,
      default: 'No description available',
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Create an index for better search performance on 'name' and 'category'
ProductSchema.index({ name: 'text', category: 'text' });

// Export the Product model
const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
