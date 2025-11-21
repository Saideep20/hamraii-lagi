
import React, { useState } from 'react';
import { ChevronRight, Mail, User, Hash, Lock, GraduationCap, Leaf, BookOpen } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center animate-fade-in bg-gray-50">
      {/* Background with University Vibe - Lighter & Cleaner */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
          alt="University Campus" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Gradient overlay for brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-white/60 to-emerald-100/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-8 mx-4">
        <div className="bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-[2.5rem] p-8 animate-slide-up relative overflow-visible">
          
          {/* Top decorative line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-t-[2.5rem]"></div>

          <div className="flex flex-col items-center mb-10">
            {/* Custom Student+Leaves Logo Composition */}
            <div className="relative mb-5 mt-2">
                <div className="h-28 w-28 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-emerald-50 relative z-10">
                   {/* Avatar Base */}
                   <div className="absolute bottom-0 w-20 h-12 bg-emerald-900 rounded-t-full overflow-hidden flex justify-center">
                      <div className="w-full h-full bg-emerald-800/50"></div>
                   </div>
                   {/* Head */}
                   <div className="absolute bottom-10 w-12 h-14 bg-orange-200 rounded-full border-2 border-white shadow-sm z-20"></div>
                   {/* Graduation Cap */}
                   <GraduationCap size={56} className="text-emerald-800 absolute -top-2 z-30 fill-emerald-900" strokeWidth={1.5} />
                   
                   {/* Hand/Scroll */}
                   <div className="absolute bottom-2 z-30 bg-white rounded-full px-2 py-0.5 shadow-sm border border-gray-100 transform -rotate-12">
                      <div className="h-2 w-10 bg-emerald-100 rounded-full flex items-center">
                         <div className="h-full w-2 bg-red-400 rounded-full ml-auto"></div>
                      </div>
                   </div>
                </div>
                
                {/* Surrounding Leaves */}
                <Leaf size={28} className="text-emerald-500 fill-emerald-500 absolute -left-2 top-8 -rotate-45" />
                <Leaf size={24} className="text-emerald-400 fill-emerald-400 absolute -left-4 top-16 -rotate-90" />
                <Leaf size={20} className="text-emerald-600 fill-emerald-600 absolute left-0 bottom-0 -rotate-12" />
                
                <Leaf size={28} className="text-emerald-500 fill-emerald-500 absolute -right-2 top-8 rotate-45" />
                <Leaf size={24} className="text-emerald-400 fill-emerald-400 absolute -right-4 top-16 rotate-90" />
                <Leaf size={20} className="text-emerald-600 fill-emerald-600 absolute right-0 bottom-0 rotate-12" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-1 tracking-tight font-display">हाम्रै लागि</h1>
            <p className="text-emerald-700 font-semibold tracking-wide text-sm uppercase">Hamrei Lagi</p>
            <div className="h-1 w-12 bg-emerald-200 rounded-full mt-3 mb-3"></div>
            <p className="text-gray-500 text-center text-sm font-medium max-w-[260px]">
              The sustainable marketplace for students. Buy, sell, and connect within your campus.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-emerald-600 transition-colors">
                  <User size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-emerald-600 transition-colors">
                  <Hash size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Student ID / Roll No." 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-emerald-600 transition-colors">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  placeholder="Student Email" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-emerald-600 transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-6"
            >
              {isLoading ? (
                <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Get Started <ChevronRight size={20} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-gray-400 text-xs mt-8 font-medium">
            By joining, you agree to our Community Guidelines.
            <br />
            <span className="text-emerald-600">Verified Student Marketplace</span>
          </p>
        </div>
      </div>
    </div>
  );
};
