
import React, { useState } from 'react';
import { School, ChevronRight, Mail, User, Hash, Lock } from 'lucide-react';

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
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center animate-fade-in">
      {/* Background with University Vibe - Trees and Campus */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=2070&auto=format&fit=crop" 
          alt="University Campus with Trees" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay that allows the trees to show through at the top/sides */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-indigo-900/60 to-black/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-8 mx-4">
        <div className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-[2rem] shadow-2xl p-8 animate-slide-up">
          
          <div className="flex flex-col items-center mb-8">
            <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-lg mb-4 rotate-3 hover:rotate-0 transition-transform duration-300">
              <School size={40} />
            </div>
            <h1 className="text-4xl font-display font-bold text-white mb-2 tracking-tight">Hamrei Lagi</h1>
            <p className="text-indigo-100 text-center font-medium">From High School to Uni – Your Trusted Marketplace</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-indigo-200 group-focus-within:text-white transition-colors">
                  <User size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full pl-12 pr-4 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder-indigo-200/70 focus:outline-none focus:bg-black/30 focus:border-white/40 transition-all font-medium"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-indigo-200 group-focus-within:text-white transition-colors">
                  <Hash size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Student ID / Roll No." 
                  className="w-full pl-12 pr-4 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder-indigo-200/70 focus:outline-none focus:bg-black/30 focus:border-white/40 transition-all font-medium"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-indigo-200 group-focus-within:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  placeholder="Student / School Email" 
                  className="w-full pl-12 pr-4 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder-indigo-200/70 focus:outline-none focus:bg-black/30 focus:border-white/40 transition-all font-medium"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-indigo-200 group-focus-within:text-white transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full pl-12 pr-4 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder-indigo-200/70 focus:outline-none focus:bg-black/30 focus:border-white/40 transition-all font-medium"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-indigo-700 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-6"
            >
              {isLoading ? (
                <div className="h-6 w-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Join Student Market <ChevronRight size={20} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-indigo-200 text-xs mt-6 font-medium">
            Verify your student status with your school ID or email.
          </p>
        </div>
      </div>
    </div>
  );
};