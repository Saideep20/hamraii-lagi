
import React, { useState } from 'react';
import { Star, ShoppingBag, Filter, X, Search, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const CATEGORIES = ['All', 'Textbooks', 'Notes', 'Supplies', 'Books'];

export const ProductList: React.FC<ProductListProps> = ({ products, onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  
  // Filter logic
  const filteredProducts = products.filter(product => {
    // Category Match
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    
    // Search Match
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(searchLower) || 
      product.description.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  return (
    <div 
      className="pb-24 animate-fade-in min-h-full bg-gray-50"
      onClick={() => setIsFilterMenuOpen(false)} // Close menu when clicking outside
    >
      {/* Header - Compact */}
      <div className="px-4 pt-5 pb-2 sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <div className="flex justify-between items-center mb-3">
          <div>
             <h1 className="text-xl font-display font-bold text-gray-900">Hamrei Lagi</h1>
             <p className="text-[10px] text-gray-500 font-medium">From High School to Uni – Your Trusted Marketplace</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 relative shadow-sm border border-indigo-100">
             <ShoppingBag size={18} />
             <span className="absolute top-2 right-2 h-1.5 w-1.5 bg-red-500 rounded-full border border-white"></span>
          </div>
        </div>
        
        {/* Search Bar & Filter - Compact */}
        <div className="flex gap-2 mb-3 relative z-30">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books, notes..." 
              className="w-full bg-gray-100 border-none rounded-xl pl-9 pr-9 py-2 text-xs font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-gray-800 placeholder-gray-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Filter Button Container */}
          <div className="relative">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsFilterMenuOpen(!isFilterMenuOpen);
              }}
              className={`p-2 rounded-xl transition-colors border border-transparent ${
                isFilterMenuOpen 
                  ? 'bg-indigo-100 text-indigo-600 border-indigo-200' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Filter size={18} />
            </button>

            {/* Floating Filter Menu */}
            {isFilterMenuOpen && (
              <div 
                onClick={(e) => e.stopPropagation()}
                className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 animate-fade-in origin-top-right z-50"
              >
                <div className="px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-50 mb-1">
                  Select Category
                </div>
                <div className="max-h-64 overflow-y-auto custom-scrollbar">
                  {CATEGORIES.map(category => (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setIsFilterMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex justify-between items-center mb-1 ${
                        activeCategory === category 
                          ? 'bg-indigo-50 text-indigo-600' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {category}
                      {activeCategory === category && <Check size={14} />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Access Chips (Horizontal Scroll) - Compact */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar -mx-4 px-4">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Background Decoration for List */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none z-0"></div>

      {/* 2-Column Grid Layout - Compact spacing */}
      <div className="p-4 grid grid-cols-2 gap-3 relative z-10 min-h-[50vh]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onProductClick(product)}
              className="group bg-white rounded-xl p-2.5 shadow-sm border border-gray-100 flex flex-col active:scale-[0.98] transition-all duration-200 cursor-pointer hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 mb-2">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-1.5 right-1.5 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[9px] font-bold text-gray-700 shadow-sm">
                  {product.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <h3 className="text-xs font-bold text-gray-900 line-clamp-2 font-display leading-tight">
                    {product.name}
                  </h3>
                </div>
                
                <p className="text-[10px] text-gray-500 line-clamp-1 mb-1.5 leading-tight">{product.description}</p>
                
                <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-50">
                  <span className="text-sm font-bold text-indigo-600">
                    ₹{product.price}
                  </span>
                  <div className="flex items-center gap-0.5">
                    <Star size={9} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-[10px] font-medium text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 py-12 flex flex-col items-center justify-center text-center text-gray-400 animate-fade-in">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <Search size={32} className="opacity-50" />
            </div>
            <p className="font-medium">No items found matching "{searchQuery}"</p>
            <p className="text-xs mt-1">Try checking your spelling or changing filters.</p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 text-indigo-600 text-sm font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};