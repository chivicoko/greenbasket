import mongoose, { Schema, Document } from 'mongoose';
import { categoryList } from '@/utils/data';

// Interface for Product
export interface IProduct extends Document {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  discountPercentage: string;
  rating: string;
  stock: string;
  quantity?: number;
  thumbnail: string;
  images: string[];
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  tags: string[];
  sku: string;
  weight: string;
  returnPolicy: string;
  minimumOrderQuantity: string;
  reviews: {
    date: string;
    rating: string;
    comment: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
}

// Define the Product Schema
const ProductSchema: Schema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Product title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: 'No description available',
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
      trim: true,
      enum: categoryList,
    },
    price: {
      type: String,
      required: [true, 'Product price is required'],
      default: '0',
    },
    discountPercentage: {
      type: String,
      default: '0',
    },
    rating: {
      type: String,
      default: '0',
    },
    stock: {
      type: String,
      default: '0',
    },
    quantity: {
      type: Number,
      default: 0,
    },
    thumbnail: {
      type: String,
      required: [true, 'Product image is required'],
    },
    images: {
      type: [String],
      default: [],
    },
    dimensions: {
      width: { type: String, default: '0' },
      height: { type: String, default: '0' },
      depth: { type: String, default: '0' },
    },
    warrantyInformation: {
      type: String,
      default: 'No warranty information available',
    },
    shippingInformation: {
      type: String,
      default: 'No shipping information available',
    },
    availabilityStatus: {
      type: String,
      default: 'Available',
    },
    tags: {
      type: [String],
      default: [],
    },
    sku: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      default: '0',
    },
    returnPolicy: {
      type: String,
      default: 'No return policy available',
    },
    minimumOrderQuantity: {
      type: String,
      default: '1',
    },
    reviews: [
      {
        date: { type: String, required: true },
        rating: { type: String, required: true },
        comment: { type: String, required: true },
        reviewerName: { type: String, required: true },
        reviewerEmail: { type: String, required: true },
      },
    ],
    meta: {
      createdAt: { type: String, default: '' },
      updatedAt: { type: String, default: '' },
      barcode: { type: String, default: '' },
      qrCode: { type: String, default: '' },
    },
  },
  {
    timestamps: true,
  }
);

// Create an index for better search performance on 'title' and 'category'
ProductSchema.index({ title: 'text', category: 'text' });

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
