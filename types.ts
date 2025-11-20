export interface Seller {
  id: string;
  name: string;
  profileImage: string;
  isVerified: boolean;
  college: string;
  age: number;
  major: string;
  bio: string;
  creditScore: number;
  joinedDate: string;
  reviews: number;
  responseRate: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  fullDescription: string;
  specs: Record<string, string>;
  images: string[];
  rating: number;
  reviewCount: number;
  sellerId: string;
  category: string;
}

export type Tab = 'HOME' | 'OFFERS' | 'PROFILE';
export type ViewState = 'LIST' | 'DETAIL' | 'SELLER';