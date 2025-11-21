
import React, { useState } from 'react';
import { Percent, Tag, Clock, ArrowRight, GraduationCap, Leaf } from 'lucide-react';
import { Product } from '../types';

interface SpecialOffersProps {
  onProductClick: (product: Product) => void;
  products: Product[];
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ onProductClick, products }) => {
  // Filter for items that have original prices (discounts)
  const discountedProducts = products.filter(p => p.originalPrice && p.originalPrice > p.price);

  return (
    <div className="pb-32 animate-fade-in bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="px-6 pt-8 pb-6 sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
             {/* Small Logo Composition */}
             <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-emerald-100 relative overflow-hidden">
                <div className="absolute bottom-0 w-5 h-3 bg-emerald-800 rounded-t-full"></div>
                <GraduationCap size={16} className="text-emerald-800 absolute top-1 z-10 fill-emerald-900" strokeWidth={1.5} />
                <Leaf size={8} className="text-emerald-500 fill-emerald-500 absolute left-0 top-2 -rotate-45" />
                <Leaf size={8} className="text-emerald-500 fill-emerald-500 absolute right-0 top-2 rotate-45" />
             </div>
             <h1 className="text-2xl font-display font-bold text-gray-900">Special Offers</h1>
          </div>
          <p className="text-xs text-gray-500 font-medium ml-8">Student Deals & Bundles</p>
        </div>
        <div className="bg-red-50 text-red-500 px-2 py-1 rounded-lg text-xs font-bold">
           Hot
        </div>
      </div>

      <div className="p-6 space-y-6">
        
        {/* Main Banner */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Flash Sale</span>
              <div className="flex items-center gap-1 text-xs font-medium bg-red-500/80 px-2 py-1 rounded-lg">
                <Clock size={12} />
                Ends in 2h 14m
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Semester Bundle</h2>
            <p className="text-indigo-100 text-sm mb-4">Get 50% off when you buy 3 or more textbooks this week.</p>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-indigo-50 transition-colors">
              View Details
            </button>
          </div>
          {/* Decor */}
          <div className="absolute right-[-20px] bottom-[-20px] opacity-20 rotate-12">
            <Percent size={140} />
          </div>
        </div>

        {/* Categories */}
        <div>
           <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
           <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {['Textbooks', 'Lab Gear', 'Notes'].map((cat, idx) => (
                 <div key={idx} className="flex-shrink-0 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm whitespace-nowrap">
                    <span className="font-medium text-sm text-gray-700">{cat}</span>
                 </div>
              ))}
           </div>
        </div>

        {/* Discount List */}
        <div>
          <div className="flex justify-between items-center mb-4">
             <h3 className="text-lg font-bold text-gray-900">Hot Deals</h3>
             <span className="text-xs text-indigo-600 font-bold">View All</span>
          </div>
          
          <div className="space-y-4">
            {discountedProducts.map(product => (
              <div 
                key={product.id}
                onClick={() => onProductClick(product)}
                className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-4 active:scale-[0.98] transition-transform"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden relative">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute top-1 left-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    -{Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%
                  </div>
                </div>
                <div className="flex-1 py-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-2">{product.name}</h4>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 mb-3 line-clamp-1">{product.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-indigo-600">₹{product.price}</span>
                    <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                  </div>
                </div>
                <div className="flex items-end pb-1 pr-1">
                   <div className="bg-gray-50 p-2 rounded-full text-gray-400">
                      <ArrowRight size={16} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
