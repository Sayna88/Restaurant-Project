import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cafeMenu } from "../../data/CafeData";

// آیکون دسته‌بندی نوشیدنی‌های گرم
const HotDrinksIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2"/>
    <path d="M35,45 C35,35 42,35 50,35 C58,35 65,35 65,45 L65,60 C65,70 55,75 50,75 C45,75 35,70 35,60 Z" fill="#b45309"/>
    <path d="M65,42 C72,42 76,46 76,52 C76,58 72,60 65,60" fill="none" stroke="#b45309" strokeWidth="4" strokeLinecap="round"/>
    <path d="M43,28 Q46,20 43,15 M50,28 Q53,20 50,15 M57,28 Q60,20 57,15" fill="none" stroke="#d97706" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

// آیکون دسته‌بندی نوشیدنی‌های سرد
const ColdDrinksIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2"/>
    <path d="M38,32 L42,75 C42,79 58,79 58,75 L62,32 Z" fill="#f59e0b" opacity="0.8"/>
    <ellipse cx="50" cy="32" rx="12" ry="3" fill="#d97706" />
    <path d="M52,22 L68,12" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
    <line x1="44" y1="45" x2="48" y2="45" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
    <line x1="46" y1="55" x2="52" y2="55" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

// آیکون دسته‌بندی چای و دمنوش
const TeasIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2"/>
    <path d="M30,55 Q30,42 50,42 Q70,42 70,55 C70,68 62,72 50,72 Q38,72 30,55 Z" fill="#065f46"/>
    <path d="M70,48 Q78,48 78,55 Q78,62 70,62" fill="none" stroke="#065f46" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M50,42 L50,34 Q58,34 58,26" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>
    <path d="M58,26 C54,22 50,26 50,26 C50,26 50,30 54,32 Z" fill="#10b981"/>
  </svg>
);

// آیکون دسته‌بندی کیک و شیرینی
const CakesIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2"/>
    <path d="M22,68 L78,68 L70,40 L30,40 Z" fill="#f43f5e"/>
    <path d="M22,68 Q50,60 78,68 L75,76 L25,76 Z" fill="#db2777"/>
    <path d="M30,40 Q50,28 70,40" fill="none" stroke="#be123c" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="50" cy="28" r="5" fill="#e11d48"/>
    <path d="M50,23 L54,15" fill="none" stroke="#4c0519" strokeWidth="2"/>
  </svg>
);

const CafeMenu = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>(""); 
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const categories = [
    { id: "HotDrinks", name: "Hot Drinks", customIcon: <HotDrinksIcon /> },
    { id: "ColdDrinks", name: "Cold Drinks", customIcon: <ColdDrinksIcon /> },
    { id: "Teas", name: "Teas & Herbal", customIcon: <TeasIcon /> },
    { id: "Cakes", name: "Cakes & Pastries", customIcon: <CakesIcon /> }
  ];

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      setTimeout(() => {
        scrollToCategory(location.state.scrollTo);
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* هدر بالایی صفحه */}
      <div className="pt-24 pb-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Simo's <span className="text-amber-500">Café</span></h1>
        <p className="text-gray-400 text-lg">Freshly Brewed Happiness</p>
      </div>

      {/* منوی استیکی دکمه‌ها */}
      <div className={`sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 py-6 shadow-lg overflow-x-auto no-scrollbar transition-transform duration-500 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-start md:justify-center gap-6 px-6 min-w-max mx-auto">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => scrollToCategory(cat.id)} className="flex flex-col items-center group w-28 md:w-32 flex-shrink-0 cursor-pointer relative">
              <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center p-3 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white group-hover:border-4 group-hover:border-amber-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]
                ${activeCategory === cat.id ? 'bg-white border-4 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]' : 'bg-gray-200 border-2 border-transparent'}`}>
                {cat.customIcon}
              </div>
              <span className={`text-sm font-extrabold whitespace-nowrap px-4 py-1.5 rounded-full -mt-5 z-10 transition-colors border-2 border-black group-hover:bg-amber-500 group-hover:text-black
                ${activeCategory === cat.id ? 'bg-amber-500 text-black' : 'bg-gray-800 text-amber-500'}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* لیست آیتم‌های منو */}
      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-24">
        {categories.map((category) => {
          const categoryItems = cafeMenu.filter(item => item.categoryId === category.id);
          if (categoryItems.length === 0) return null;
          
          return (
            <div key={category.id} id={category.id} className="scroll-mt-48">
              <div className="flex flex-col items-center gap-2 mb-10">
                <h2 className="text-4xl font-bold text-white relative inline-block">
                  {category.name}
                  <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-amber-500 rounded-full"></span>
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {categoryItems.map(item => (
                  <div key={item.id} className="flex flex-col md:flex-row bg-gray-900/40 border border-gray-800 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-colors group">
                    <div className="w-full md:w-48 h-48 relative overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                            {item.name}
                          </h3>
                          <span className="bg-amber-500 text-black font-extrabold px-4 py-1 rounded-full text-lg shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                            ${item.price}
                          </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mt-2 line-clamp-2">
                          {item.ingredients.join(', ')}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-end">
                         <button className="text-amber-500 hover:text-white font-medium flex items-center gap-2 transition-colors cursor-pointer">+ Add to Order</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CafeMenu;