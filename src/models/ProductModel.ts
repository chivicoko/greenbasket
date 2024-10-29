import { categoryList } from '@/utils/data';
import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const ProductSchema: Schema = new Schema(
  {
    id: {
      type: String,
      unique: true,
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
    timestamps: true,
  }
);

// Create an index for better search performance on 'name' and 'category'
ProductSchema.index({ name: 'text', category: 'text' });

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
