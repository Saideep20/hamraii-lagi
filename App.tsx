
import React, { useState } from 'react';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { SellerIdentity } from './components/SellerIdentity';
import { LoginScreen } from './components/LoginScreen';
import { SpecialOffers } from './components/SpecialOffers';
import { UserProfile } from './components/UserProfile';
import { PRODUCTS, SELLERS } from './constants';
import { Product, ViewState, Tab } from './types';
import { Home, Tag, User } from 'lucide-react';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Navigation State
  const [activeTab, setActiveTab] = useState<Tab>('HOME');
  
  // Home Tab Specific State
  const [homeView, setHomeView] = useState<ViewState>('LIST');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSellerId, setSelectedSellerId] = useState<string | null>(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Logic to open product details (can be called from Home or Offers)
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setHomeView('DETAIL');
    // If we click a product in Offers, we switch the "background context" to Home so we see the detail view
    if (activeTab !== 'HOME') {
      setActiveTab('HOME'); 
    }
  };

  const handleSellerClick = (sellerId: string) => {
    setSelectedSellerId(sellerId);
    setHomeView('SELLER');
  };

  const handleBackToHome = () => {
    setHomeView('LIST');
    setSelectedProduct(null);
  };

  const handleBackToProduct = () => {
    setHomeView('DETAIL');
    setSelectedSellerId(null);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Render Content based on Tabs and ViewState
  const renderContent = () => {
    // If we are in Home tab, check the stack
    if (activeTab === 'HOME') {
      // If we are deeper in the stack (Detail or Seller), show those overlays
      if (homeView === 'DETAIL' && selectedProduct) {
         return (
           <ProductDetail 
             product={selectedProduct}
             seller={SELLERS[selectedProduct.sellerId]}
             onBack={handleBackToHome}
             onSellerClick={handleSellerClick}
           />
         );
      }
      if (homeView === 'SELLER' && selectedSellerId) {
        return (
          <SellerIdentity 
            seller={SELLERS[selectedSellerId]}
            onBack={handleBackToProduct}
          />
        );
      }
      // Default Home List
      return <ProductList products={PRODUCTS} onProductClick={handleProductClick} />;
    }

    if (activeTab === 'OFFERS') {
      return <SpecialOffers products={PRODUCTS} onProductClick={handleProductClick} />;
    }

    if (activeTab === 'PROFILE') {
      return <UserProfile />;
    }
  };

  // Hide bottom nav if we are in detailed views (Detail or Seller)
  const showBottomNav = activeTab !== 'HOME' || homeView === 'LIST';

  return (
    <div className="min-h-screen w-full flex justify-center bg-fixed bg-cover bg-center relative" 
         style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop")' }}>
      
      {/* Darker overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-0"></div>

      {/* Mobile App Container */}
      <div className="w-full max-w-lg h-[100dvh] bg-white/95 relative z-10 shadow-2xl overflow-hidden flex flex-col border-x border-white/20">
        
        {/* Main Content Area - Scrollable */}
        <div className="flex-1 relative overflow-y-auto no-scrollbar scroll-smooth">
           {renderContent()}
        </div>

        {/* Bottom Navigation Bar */}
        {showBottomNav && (
          <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-xl text-white rounded-2xl p-2 shadow-2xl border border-white/10 z-40 flex justify-around items-center animate-slide-up">
            <button 
              onClick={() => setActiveTab('HOME')}
              className={`flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300 ${activeTab === 'HOME' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white/80'}`}
            >
              <Home size={22} strokeWidth={activeTab === 'HOME' ? 2.5 : 2} />
              {activeTab === 'HOME' && <span className="text-[10px] font-bold mt-1">Home</span>}
            </button>
            
            <button 
              onClick={() => setActiveTab('OFFERS')}
              className={`flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300 ${activeTab === 'OFFERS' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white/80'}`}
            >
              <Tag size={22} strokeWidth={activeTab === 'OFFERS' ? 2.5 : 2} />
              {activeTab === 'OFFERS' && <span className="text-[10px] font-bold mt-1">Offers</span>}
            </button>

            <button 
              onClick={() => setActiveTab('PROFILE')}
              className={`flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300 ${activeTab === 'PROFILE' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white/80'}`}
            >
              <User size={22} strokeWidth={activeTab === 'PROFILE' ? 2.5 : 2} />
              {activeTab === 'PROFILE' && <span className="text-[10px] font-bold mt-1">Profile</span>}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;
