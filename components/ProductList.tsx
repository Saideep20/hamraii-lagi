
import React, { useState } from 'react';
import { Star, ShoppingBag, Filter, X, Search, Check, GraduationCap, Leaf, ChevronDown } from 'lucide-react';
import { Product } from '../types';
import { SELLERS } from '../constants';

interface ProductListProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const COLLEGES = [
  'All', 
  'Xavier Intl College', 
  'KMC', 
  'UniGlobe College', 
  'NIST', 
  'Global College of Science',
  'Trinity Int\'l College',
  'St. Xavier\'s College',
  'Prasadi Academy',
  'CCRC',
  'Bernhardt College',
  'Pentagon Int\'l College',
  'GoldenGate Int\'l College',
  'United Academy',
  'WhiteHouse Int\'l College',
  'Liverpool Int\'l College',
  'Texas Int\'l College',
  'NASA Int\'l College',
  'Apollo Int\'l College',
  'Kathmandu BernHardt',
  'Southwestern State',
  'Caribbean College',
  'Morgan Int\'l College',
  'Omega Int\'l College',
  'Nobel Academy'
];

const CATEGORIES = ['All', 'Textbooks', 'Notes', 'Supplies', 'Books'];

export const ProductList: React.FC<ProductListProps> = ({ products, onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedColleges, setSelectedColleges] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  
  // Filter logic
  const filteredProducts = products.filter(product => {
    // Category Match
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    
    // College Match - Using actual seller data
    // If no colleges selected (empty array), show all.
    const seller = SELLERS[product.sellerId];
    const matchesCollege = selectedColleges.length === 0 || (seller && selectedColleges.includes(seller.college));
    
    // Search Match
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(searchLower) || 
      product.description.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch && matchesCollege;
  });

  const toggleCollege = (college: string) => {
    if (college === 'All') {
      setSelectedColleges([]); // Clear all filters
      return;
    }

    setSelectedColleges(prev => {
      if (prev.includes(college)) {
        return prev.filter(c => c !== college);
      } else {
        return [...prev, college];
      }
    });
  };

  return (
    <div 
      className="pb-24 animate-fade-in min-h-full bg-gray-50"
      onClick={() => setIsFilterMenuOpen(false)} // Close menu when clicking outside
    >
      {/* Header - Compact */}
      <div className="px-4 pt-5 pb-2 sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <div className="flex justify-between items-center mb-3">
          <div>
             <div className="flex items-center gap-2">
                {/* Small Logo Composition */}
                <div className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-