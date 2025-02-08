// 'use client';

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// // Define the Zod schema based on the Product2 interface
// const productSchema = z.object({
//   title: z.string().nonempty('Title is required'),
//   description: z.string().optional(),
//   category: z.string().nonempty('Category is required'),
//   price: z.string().regex(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number'),
//   discountPercentage: z.number().min(0).max(100, 'Discount must be between 0 and 100').optional(),
// //   rating: z.number().min(0).max(5, 'Rating must be between 0 and 5').optional(),
//   stock: z.number().int().min(0, 'Stock cannot be negative').optional(),
//   quantity: z.number().int().min(0, 'Quantity cannot be negative').optional(),
//   thumbnail: z.string().url('Thumbnail must be a valid URL').optional(),
//   images: z.array(z.string().url()).optional(),
//   dimensions: z.object({
//     width: z.number().min(0),
//     height: z.number().min(0),
//     depth: z.number().min(0),
//   }).optional(),
//   warrantyInformation: z.string().optional(),
// //   shippingInformation: z.string().optional(),
//   availabilityStatus: z.string().optional(),
//   tags: z.array(z.string()).optional(),
// //   sku: z.string().nonempty('SKU is required'),
//   weight: z.number().min(0).optional(),
//   returnPolicy: z.string().optional(),
//   minimumOrderQuantity: z.number().min(1).optional(),
// //   reviews: z.array(
// //     z.object({
// //       date: z.string().nonempty('Review date is required'),
// //       rating: z.number().min(1).max(5, 'Review rating must be between 1 and 5'),
// //       comment: z.string().optional(),
// //       reviewerName: z.string().nonempty('Reviewer name is required'),
// //       reviewerEmail: z.string().email('Invalid email address'),
// //     })
// //   ).optional(),
// //   meta: z.object({
// //     createdAt: z.string().optional(),
// //     updatedAt: z.string().optional(),
// //     barcode: z.string().optional(),
// //     qrCode: z.string().optional(),
// //   }).optional(),
// });

// // Type inferred from zod schema
// type ProductFormValues = z.infer<typeof productSchema>;

// const ProductForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<ProductFormValues>({
//     resolver: zodResolver(productSchema),
//   });

//   const onSubmit = (data: ProductFormValues) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
//       {/* Title */}
//       <div>
//         <label htmlFor="title">Title</label>
//         <input className='border' id="title" {...register('title')} />
//         {errors.title && <p>{errors.title.message}</p>}
//       </div>

//       {/* Category */}
//       <div>
//         <label htmlFor="category">Category</label>
//         <input className='border' id="category" {...register('category')} />
//         {errors.category && <p>{errors.category.message}</p>}
//       </div>

//       {/* Price */}
//       <div>
//         <label htmlFor="price">Price</label>
//         <input className='border' id="price" {...register('price')} />
//         {errors.price && <p>{errors.price.message}</p>}
//       </div>

//       {/* SKU */}
//       {/* <div>
//         <label htmlFor="sku">SKU</label>
//         <input className='border' id="sku" {...register('sku')} />
//         {errors.sku && <p>{errors.sku.message}</p>}
//       </div> */}

//       {/* Weight */}
//       <div>
//         <label htmlFor="weight">Weight</label>
//         <input className='border' id="weight" type="number" {...register('weight')} />
//         {errors.weight && <p>{errors.weight.message}</p>}
//       </div>

//       {/* Dimensions */}
//       <fieldset>
//         <legend>Dimensions</legend>
//         <div>
//           <label htmlFor="dimensions.width">Width</label>
//           <input className='border' id="dimensions.width" type="number" {...register('dimensions.width')} />
//           {errors.dimensions?.width && <p>{errors.dimensions.width.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="dimensions.height">Height</label>
//           <input className='border' id="dimensions.height" type="number" {...register('dimensions.height')} />
//           {errors.dimensions?.height && <p>{errors.dimensions.height.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="dimensions.depth">Depth</label>
//           <input className='border' id="dimensions.depth" type="number" {...register('dimensions.depth')} />
//           {errors.dimensions?.depth && <p>{errors.dimensions.depth.message}</p>}
//         </div>
//       </fieldset>

//       {/* Submit button */}
//       <button type="submit">Submit</button>
      
//         <button
//             disabled={isSubmitting}
//             type="submit"
//             className={`${isSubmitting ? "opacity-60" : ""} py-2 px-3 bg-blue-600 hover:bg-blue-700 rounded-md`}
//         >
//             {isSubmitting ? "Loading..." : "Submit"}
//         </button>

//           {errors.root && (
//             <div className="text-red-600 text-sm">{errors.root.message}</div>
//           )}
//     </form>
//   );
// };

// export default ProductForm;