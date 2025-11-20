
import React from 'react';
import { Settings, CreditCard, Package, Heart, LogOut, ChevronRight, Wallet, Bell, Tag } from 'lucide-react';

export const UserProfile: React.FC = () => {
  return (
    <div className="pb-32 animate-fade-in bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white pt-12 pb-6 px-6 rounded-b-[2.5rem] shadow-sm border-b border-gray-100">
         <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-display font-bold text-gray-900">Profile</h1>
            <button className="p-2 bg-gray-50 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
               <Settings size={20} />
            </button>
         </div>

         <div className="flex items-center gap-4 mb-6">
            <div className="relative">
               <img 
                 src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80" 
                 alt="User" 
                 className="w-20 h-20 rounded-full object-cover border-4 border-gray-50 shadow-md"
               />
               <div className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
            </div>
            <div>
               <h2 className="text-xl font-bold text-gray-900">Alex Johnson</h2>
               <p className="text-sm text-gray-500">ID: 2490129 • Class of '25</p>
               <p className="text-xs text-indigo-600 font-medium mt-1">Verified Student</p>
            </div>
         </div>

         {/* Stats Row */}
         <div className="grid grid-cols-3 gap-4">
             <div className="bg-indigo-50 p-3 rounded-2xl text-center">
                <span className="block text-lg font-bold text-indigo-600">12</span>
                <span className="text-[10px] uppercase font-bold text-indigo-400">Orders</span>
             </div>
             <div className="bg-emerald-50 p-3 rounded-2xl text-center">
                <span className="block text-lg font-bold text-emerald-600">₹1500</span>
                <span className="text-[10px] uppercase font-bold text-emerald-400">Credits</span>
             </div>
             <div className="bg-amber-50 p-3 rounded-2xl text-center">
                <span className="block text-lg font-bold text-amber-600">4.9</span>
                <span className="text-[10px] uppercase font-bold text-amber-400">Rating</span>
             </div>
         </div>
      </div>

      {/* Menu Items */}
      <div className="p-6 space-y-6">
         
         {/* Section 1 */}
         <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 pl-2">Activity</h3>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
               <div className="p-4 flex items-center justify-between border-b border-gray-50 active:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <Package size={20} />
                     </div>
                     <span className="font-medium text-gray-700">Purchase History</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
               </div>
               <div className="p-4 flex items-center justify-between border-b border-gray-50 active:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                        <Tag size={20} />
                     </div>
                     <span className="font-medium text-gray-700">My Listings</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
               </div>
               <div className="p-4 flex items-center justify-between active:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-pink-50 text-pink-600 rounded-lg">
                        <Heart size={20} />
                     </div>
                     <span className="font-medium text-gray-700">Wishlist</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
               </div>
            </div>
         </div>

         {/* Section 2 */}
         <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 pl-2">Account</h3>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
               <div className="p-4 flex items-center justify-between border-b border-gray-50 active:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                        <Wallet size={20} />
                     </div>
                     <span className="font-medium text-gray-700">Payment Methods</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
               </div>
               <div className="p-4 flex items-center justify-between active:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                        <Bell size={20} />
                     </div>
                     <span className="font-medium text-gray-700">Notifications</span>
                  </div>
                  <div className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</div>
               </div>
            </div>
         </div>

         <button className="w-full py-4 text-red-500 font-medium text-sm bg-white border border-gray-100 rounded-2xl hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
            <LogOut size={18} />
            Log Out
         </button>

         <div className="text-center text-xs text-gray-400 pb-4">
            Version 2.4.0 • Build 1045
         </div>

      </div>
    </div>
  );
};
