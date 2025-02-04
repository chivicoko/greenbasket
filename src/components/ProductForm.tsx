"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import Image from "next/image";
import { categoryList, sindleProduct } from "@/utils/data";
import { Add } from "@mui/icons-material";
import { useParams, usePathname, useRouter } from "next/navigation";

// Zod schema reflecting the form inputs
const schema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  price: z
    .number()
    .min(1, "Price must be at least 1.00")
    .positive("Price must be a positive number"),
  category: z.string().min(1, "Category is required"),
  image: z.union([z.instanceof(File), z.string()]).optional(),
});


type FormFields = z.infer<typeof schema>;

interface ProductFormProps {
  productData?: FormFields; // Optional prop for edit mode
}

const ProductForm = ({ productData }: ProductFormProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(
    productData?.image && typeof productData.image === "string"
      ? productData.image
      : null
  );

  
  // const router = useRouter();
  const params = useParams();
  const pathname = usePathname();

  // console.log(router);
  console.log(params);
  console.log(pathname);


  const {
    register,
    handleSubmit,
    setError,
    setValue, // For setting form field values manually
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      name: sindleProduct.name,
      price: Number(sindleProduct.price), // Convert to number
      category: sindleProduct.category,
      description: sindleProduct.desc,
      image: sindleProduct.img,
    },
    resolver: zodResolver(schema),
  });

  // Set default values when productData is available (Edit mode)
  useEffect(() => {
    if (productData) {
      setValue("name", productData.name);
      setValue("description", productData.description);
      setValue("price", productData.price);
      setValue("category", productData.category);

      // Show existing image preview if available as URL
      if (typeof productData.image === "string") {
        setImagePreview(productData.image);
      } else if (productData.image instanceof File) {
        setImagePreview(URL.createObjectURL(productData.image));
      }
    }
  }, [productData, setValue]);

  // Image preview handling
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue("image", file); // Update form value with the File object
    }
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      // Simulate async request, replace with actual API request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: `An error occurred while submitting the form. ${error}`,
      });
    }
  };

  return (
    <div className="fixed inset-0 p-2 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg py-8 px-6 md:px-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3 "
        >
          <h1 className="text-center text-xl font-semibold">
            {productData ? "Edit Product" : "Add Product"}
          </h1>

          <input
            {...register("name")}
            type="text"
            placeholder="Product Name"
            className="bg-transparent text-gray-700 border rounded-lg border-[#064f38] focus:border-[#064f38] focus:ring-1 focus:ring-[#064f38] p-3 shadow-lg w-full text-base leading-tight focus:outline-0"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <textarea
            {...register("description")}
            placeholder="Description"
            className="bg-transparent text-gray-700 border rounded-lg border-[#064f38] focus:border-[#064f38] focus:ring-1 focus:ring-[#064f38] p-3 shadow-lg w-full text-base leading-tight focus:outline-0"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}

          <input
            {...register("price", { valueAsNumber: true })}
            type="number"
            placeholder="Price"
            step="0.01"
            className="bg-transparent text-gray-700 border rounded-lg border-[#064f38] focus:border-[#064f38] focus:ring-1 focus:ring-[#064f38] p-3 shadow-lg w-full text-base leading-tight focus:outline-0"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}

          <select
            {...register("category", { required: "Category is required" })}
            className="bg-transparent text-gray-700 border rounded-lg border-[#064f38] focus-within:border-[#064f38] focus-within:ring-1 focus-within:ring-[#064f38] p-3 shadow-lg w-full text-base leading-tight focus:outline-0 focus:ring-0"
          >
            <option value="">Select Category</option>
            {categoryList.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}

          <label
            htmlFor="imageFile"
            className="cursor-pointer flex items-center gap-1 p-2 border rounded-lg border-[#064f38] focus:border-[#064f38] focus:ring-1 focus:ring-[#064f38] shadow-lg"
          >
            <div className="w-1/2 text-lg font-semibold text-center underline hover:text-theme">
              <span className="flex flex-col gap-2 text-gray-800 text-sm">
                {imagePreview ?
                  <div>
                    <p>Selected Image</p>
                    <p className="text-xs text-blue-700">Change image</p>
                  </div>
                :'Select Image'}
              </span>
            </div>
            <div className="relative w-full h-24 sm:h-28 self-start border-2 border-[#064f38] rounded-lg overflow-hidden p-4">
              <span className="text-[#064f38a6] z-50 absolute top-4 md:top-5 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out hover:scale-125">
                {" "}
                <Add className="text-7xl" />{" "}
              </span>
              {imagePreview ?
                <Image
                  src={imagePreview}
                  alt="Image preview"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              :
                <Image
                  src="/images/imagePlaceholder.jpeg"
                  alt="Placeholder preview"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              }
            </div>
          </label>
          <input
            {...register("image")}
            type="file"
            id="imageFile"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}

          <button
            disabled={isSubmitting}
            type="submit"
            className={`${
              isSubmitting ? "opacity-60" : ""
            } py-2 px-3 bg-blue-600 hover:bg-blue-700 rounded-md`}
          >
            {isSubmitting ? "Loading..." : productData ? "Update Product" : "Submit"}
          </button>

          {errors.root && (
            <div className="text-red-600 text-sm">{errors.root.message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
