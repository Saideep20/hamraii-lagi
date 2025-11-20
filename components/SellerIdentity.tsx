
import React from 'react';
import { ArrowLeft, ShieldCheck, Award, MapPin, Calendar, MoreHorizontal, MessageSquare, Flag, ThumbsUp, GraduationCap } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Seller } from '../types';

interface SellerIdentityProps {
  seller: Seller;
  onBack: () => void;
}

export const SellerIdentity: React.FC<SellerIdentityProps> = ({ seller, onBack }) => {
  // Data for the gauge
  const scoreData = [
    { name: 'Score', value: seller.creditScore },
    { name: 'Remaining', value: 850 - seller.creditScore }
  ];
  const COLORS = ['#10B981', '#E5E7EB']; // Green and Gray

  // Determine score label color
  const getScoreColor = (score: number) => {
    if (score >= 750) return 'text-emerald-600';
    if (score >= 650) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number) => {
      if (score >= 750) return 'Excellent';
      if (score >= 650) return 'Good';
      return 'Fair';
  }

  return (
    <div className="bg-white min-h-screen pb-8 animate-slide-in-right">
      {/* Header Image/Banner */}
      <div className="relative h-48 w-full overflow-hidden">
         <div className="absolute inset-0 bg-indigo-900/30 z-10"></div>
         <img 
           src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" 
           alt="University Background" 
           className="w-full h-full object-cover"
         />
         <div className="absolute top-0 left-0 w-full z-20 p-4 flex justify-between items-center">
            <button 
              onClick={onBack}
              className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-colors">
              <MoreHorizontal size={20} />
            </button>
         </div>
      </div>

      {/* Profile Content Container */}
      <div className="relative -mt-16 px-6">
         {/* Profile Image */}
         <div className="relative inline-block">
            <img 
              src={seller.profileImage} 
              alt={seller.name} 
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            {seller.isVerified && (
               <div className="absolute bottom-2 right-2 bg-blue-500 text-white p-1.5 rounded-full border-4 border-white shadow-sm">
                  <ShieldCheck size={18} />
               </div>
            )}
         </div>

         <div className="mt-4 mb-6">
            <div className="flex items-center gap-2 mb-1">
               <h1 className="text-2xl font-bold font-display text-gray-900">{seller.name}</h1>
               {seller.isVerified && (
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full border border-blue-100 tracking-wider uppercase">
                    Verified Student
                  </span>
               )}
            </div>
            <p className="text-gray-500 flex items-center gap-1.5 text-sm">
               <GraduationCap size={16} className="text-gray-400" />
               {seller.college}
            </p>
         </div>

         {/* Stats Grid */}
         <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-3 rounded-xl text-center border border-gray-100">
               <div className="text-lg font-bold text-gray-900">{seller.age}</div>
               <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wide">Age</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl text-center border border-gray-100">
               <div className="text-lg font-bold text-gray-900">{seller.reviews}</div>
               <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wide">Reviews</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl text-center border border-gray-100">
               <div className="text-lg font-bold text-gray-900">{seller.joinedDate.split(' ')[1]}</div>
               <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wide">Since</div>
            </div>
         </div>

         {/* Academic Info */}
         <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
               <Award size={16} className="text-primary" />
               Academic Profile
            </h3>
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 space-y-4">
               <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                  <span className="text-sm text-gray-500">Major / Stream</span>
                  <span className="text-sm font-semibold text-gray-900">{seller.major}</span>
               </div>
               <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                  <span className="text-sm text-gray-500">Student Status</span>
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">Active</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Institute Location</span>
                  <span className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                     <MapPin size={12} />
                     North Campus
                  </span>
               </div>
            </div>
         </div>

         {/* Credit Score Badge */}
         <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
               <ShieldCheck size={16} className="text-primary" />
               Trust Score
            </h3>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
               {/* Abstract bg shapes */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full -ml-10 -mb-10 blur-xl"></div>

               <div className="flex items-center justify-between relative z-10">
                  <div>
                     <p className="text-gray-300 text-sm mb-1">UniCredit Score</p>
                     <h4 className={`text-3xl font-bold ${getScoreColor(seller.creditScore)}`}>
                        {seller.creditScore}
                     </h4>
                     <p className={`text-sm font-medium mt-1 px-2 py-0.5 rounded-md inline-block bg-white/10 ${getScoreColor(seller.creditScore)}`}>
                        {getScoreLabel(seller.creditScore)}
                     </p>
                  </div>
                  <div className="h-24 w-24">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                           <Pie
                              data={scoreData}
                              cx="50%"
                              cy="50%"
                              innerRadius={35}
                              outerRadius={45}
                              startAngle={90}
                              endAngle={-270}
                              dataKey="value"
                              stroke="none"
                              cornerRadius={10}
                           >
                              {scoreData.map((entry, index) => (
                                 <Cell key={`cell-${index}`} fill={index === 0 ? (seller.creditScore > 700 ? '#10B981' : '#F59E0B') : '#ffffff20'} />
                              ))}
                           </Pie>
                        </PieChart>
                     </ResponsiveContainer>
                  </div>
               </div>
               <p className="text-xs text-gray-400 mt-4 relative z-10">
                  Calculated based on transaction history, reviews, and verified student status.
               </p>
            </div>
         </div>

         {/* Action Buttons */}
         <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-semibold shadow-lg shadow-indigo-200 active:scale-[0.98] transition-transform">
               <MessageSquare size={18} />
               Message
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 active:scale-[0.98] transition-transform">
               <ThumbsUp size={18} />
               View Reviews
            </button>
         </div>
         
         <button className="w-full flex items-center justify-center gap-2 text-red-500 py-3 rounded-xl font-medium text-sm hover:bg-red-50 transition-colors">
             <Flag size={16} />
             Report Seller
         </button>

      </div>
    </div>
  );
};