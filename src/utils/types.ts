export interface Product {
  _id: string;
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface DummyProduct {
  id: number;
  name: string;
  desc: string;
  img: string;
  price: number;
  weight: number;
}

export interface SingleItemProps {
  params: {
    id: string;
  };
}

export interface Product2 {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  quantity?: number;
  thumbnail: string;
  images: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  tags: string[];
  sku: string;
  weight: number;
  returnPolicy: string;
  minimumOrderQuantity: number;
  reviews: {
    date: string;
    rating: number;
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

export interface NavbarProps {
  firstDivClasses: string;
  secondDivClasses: string;
}

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export interface ExtrasProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
  images: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  tags: string[];
  sku: string;
  weight: number;
  returnPolicy: string;
  minimumOrderQuantity: number;
  reviews: {
    date: string;
    rating: number;
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

export interface ChartData {
  monthYear: string;
  non_projects: number;
  projects: number;
}