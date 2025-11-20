
import React, { useState } from 'react';
import { ArrowLeft, Star, ShoppingCart, Zap, ShieldCheck, User, MessageCircle, QrCode } from 'lucide-react';
import { Product, Seller } from '../types';

interface ProductDetailProps {
  product: Product;
  seller: Seller;
  onBack: () => void;
  onSellerClick: (sellerId: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, seller, onBack, onSellerClick }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col animate-slide-up">
      {/* Header Navigation */}
      <div className="absolute top-0 left-0 w-full z-20 p-4 flex justify-between items-center pointer-events-none">
        <button 
          onClick={onBack}
          className="h-10 w-10 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-gray-700 pointer-events-auto active:scale-90 transition-transform"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex gap-2 pointer-events-auto">
             <button className="h-10 w-10 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-gray-700">
                <ShoppingCart size={20} />
             </button>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full h-[45vh] bg-gray-200 flex-shrink-0">
        <img 
          src={product.images[currentImage]} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentImage === idx ? 'w-6 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative -mt-6 rounded-t-[2rem] bg-white p-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] flex-1 pb-8">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />
        
        {/* Header Info */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-1">{product.name}</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
               <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-600 uppercase tracking-wide">
                 {product.category}
               </span>
               <span>•</span>
               <div className="flex items-center gap-1">
                 <Star size={14} className="fill-yellow-400 text-yellow-400" />
                 <span className="font-semibold text-gray-900">{product.rating}</span>
                 <span className="text-gray-400">({product.reviewCount} reviews)</span>
               </div>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-end gap-3 mb-6">
           <span className="text-3xl font-bold text-primary">₹{product.price}</span>
           {product.originalPrice && (
             <>
               <span className="text-lg text-gray-400 line-through decoration-gray-400/60 mb-1">
                 ₹{product.originalPrice}
               </span>
               <span className="mb-1.5 px-2 py-0.5 bg-red-50 text-red-600 text-xs font-bold rounded-full">
                 {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
               </span>
             </>
           )}
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Description</h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {product.fullDescription}
          </p>
        </div>

        {/* Specifications */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Specifications</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">{key}</p>
                <p className="text-sm font-semibold text-gray-900 truncate">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seller Info Card */}
        <div className="mb-8">
           <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Seller Information</h3>
           <div className="bg-gradient-to-br from-indigo-50 to-white p-4 rounded-2xl border border-indigo-100 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4 relative z-10">
                 <div className="relative">
                    <img src={seller.profileImage} alt={seller.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                    {seller.isVerified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-0.5 rounded-full border-2 border-white">
                        <ShieldCheck size={12} />
                      </div>
                    )}
                 </div>
                 <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900">{seller.name}</h4>
                      {seller.isVerified && <span className="text-[10px] font-bold bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">VERIFIED</span>}
                    </div>
                    <p className="text-xs text-gray-500">{seller.college} • {seller.major}</p>
                    <div className="flex items-center gap-1 mt-1">
                       <div className="h-2 w-2 rounded-full bg-green-500"></div>
                       <span className="text-xs text-green-600 font-medium">Online</span>
                    </div>
                 </div>
                 <button className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-50 active:bg-indigo-50">
                    <MessageCircle size={20} />
                 </button>
              </div>

              <p className="text-sm text-gray-600 italic mb-4 relative z-10">"{seller.bio}"</p>
              
              {/* QR Code Link */}
              <div 
                onClick={() => onSellerClick(seller.id)}
                className="bg-white/80 backdrop-blur p-3 rounded-xl border border-indigo-100 flex items-center justify-between cursor-pointer hover:bg-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 group-hover:scale-110 transition-transform">
                    <QrCode size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Digital ID</p>
                    <p className="text-[10px] text-gray-500">Scan for full seller identity</p>
                  </div>
                </div>
                <ArrowLeft size={16} className="rotate-180 text-gray-400 group-hover:text-indigo-600 transition-colors" />
              </div>
           </div>
        </div>

      </div>

      {/* Bottom Actions - Sticky instead of fixed to respect container */}
      <div className="sticky bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 px-6 pb-8 safe-area-pb z-30 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button className="flex-1 py-3.5 px-4 rounded-xl bg-gray-100 text-gray-900 font-semibold hover:bg-gray-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
           <ShoppingCart size={18} />
           Add to Cart
        </button>
        <button className="flex-[1.5] py-3.5 px-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-indigo-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:bg-indigo-700">
           <Zap size={18} />
           Buy Now
        </button>
      </div>
    </div>
  );
};
