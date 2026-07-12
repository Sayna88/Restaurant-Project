import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cafeMenu } from "../../data/CafeData";

const CafeMenu = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>(""); 
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const categories = [
    { id: "HotDrinks", name: "Hot Drinks", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=150&auto=format&fit=crop&q=60" },
    { id: "Teas", name: "Teas & Herbal", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=150&auto=format&fit=crop&q=60" },
    { id: "Milkshakes", name: "Milkshakes", img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=150&auto=format&fit=crop&q=60" },
    { id: "Smoothies", name: "Smoothies", img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=150&auto=format&fit=crop&q=60" },
    { id: "IceCoffee", name: "Ice Coffee", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=150&auto=format&fit=crop&q=60" },
    { id: "Desserts", name: "Desserts", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&auto=format&fit=crop&q=60" },
    { id: "Waffles", name: "Waffles", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiVNN-2SMnYF5zJHa9xi-UBedADnJRQXxzM3VQOyUDQ&s=10" },
    { id: "Mocktails", name: "Mocktails", img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=150&auto=format&fit=crop&q=60" }
  ];

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 200;
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
      <div className="pt-24 pb-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Simo's <span className="text-amber-500">Café</span></h1>
        <p className="text-gray-400 text-lg">Premium Handcrafted Treats & Brews</p>
      </div>

      <div className={`sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-900 py-6 shadow-xl overflow-x-auto no-scrollbar transition-transform duration-500 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-start lg:justify-center gap-4 px-6 min-w-max mx-auto">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => scrollToCategory(cat.id)} className={`flex flex-col items-center justify-between p-2 bg-white w-24 h-28 md:w-28 md:h-32 rounded-xl border transition-all duration-300 shadow-md cursor-pointer group ${activeCategory === cat.id ? 'ring-4 ring-amber-500 scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)]' : 'border-gray-200 hover:scale-105'}`}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-amber-900/80 shadow-inner">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
              </div>
              
              <span className={`text-[10px] md:text-xs font-bold whitespace-nowrap px-2 py-1 rounded-md w-full text-center shadow-sm transition-colors
                ${activeCategory === cat.id ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-900 group-hover:bg-amber-600 group-hover:text-white'}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

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