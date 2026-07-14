import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { restaurantMenu } from "../../data/RestaurantData";
import { useCart } from "../../context/CartContext";

const PastaIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#cccccc" strokeWidth="2"/>
    <circle cx="50" cy="50" r="32" fill="#f8f9fa" />
    <path d="M25,50 Q35,20 50,45 T75,50" fill="none" stroke="#f4c430" strokeWidth="4.5" strokeLinecap="round"/>
    <path d="M28,40 Q40,65 55,35 T72,55" fill="none" stroke="#e0a800" strokeWidth="4" strokeLinecap="round"/>
    <path d="M22,55 Q45,30 60,55 T78,45" fill="none" stroke="#f4c430" strokeWidth="4.5" strokeLinecap="round"/>
    <path d="M30,35 Q45,60 65,35" fill="none" stroke="#e0a800" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M40,50 Q50,38 60,50 Q66,62 50,65 Q34,62 40,50 Z" fill="#d32f2f" />
    <circle cx="45" cy="55" r="4" fill="#b71c1c" />
    <circle cx="56" cy="52" r="4.5" fill="#b71c1c" />
    <path d="M48,45 Q44,40 50,37 Q56,41 48,45 Z" fill="#2e7d32" />
    <path d="M52,48 Q59,44 56,39 Q49,44 52,48 Z" fill="#4caf50" />
  </svg>
);

const SteakIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#cccccc" strokeWidth="2"/>
    <circle cx="50" cy="50" r="32" fill="#f8f9fa" />
    <path d="M34,46 C30,34 46,24 64,30 C76,34 78,52 70,66 C62,76 42,74 36,64 C32,58 36,52 34,46 Z" fill="#5d4037"/>
    <path d="M36,46 C33,36 46,27 61,32 C71,35 73,50 67,61 C60,70 43,69 38,60 C35,55 38,50 36,46 Z" fill="#4e342e"/>
    <line x1="44" y1="34" x2="56" y2="48" stroke="#271714" strokeWidth="3" strokeLinecap="round"/>
    <line x1="52" y1="34" x2="64" y2="48" stroke="#271714" strokeWidth="3" strokeLinecap="round"/>
    <line x1="60" y1="37" x2="70" y2="49" stroke="#271714" strokeWidth="3" strokeLinecap="round"/>
    <line x1="38" y1="42" x2="48" y2="54" stroke="#271714" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="28" cy="32" r="4" fill="#4caf50"/>
    <circle cx="24" cy="40" r="4.5" fill="#388e3c"/>
    <circle cx="27" cy="48" r="4" fill="#4caf50"/>
    <circle cx="21" cy="46" r="3.5" fill="#2e7d32"/>
    <path d="M62,66 Q70,72 60,78 Z" fill="#ffb74d" stroke="#f57c00" strokeWidth="1"/>
    <path d="M50,70 Q58,78 48,82 Z" fill="#ffa726" stroke="#e65100" strokeWidth="1"/>
    <path d="M68,56 Q76,62 70,70 Z" fill="#ffcc80" stroke="#f57c00" strokeWidth="1"/>
  </svg>
);

const FriedChickenIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <g transform="translate(0, 5)">
      <path d="M42,45 L32,18" stroke="#d68a38" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="28" cy="16" r="4.5" fill="#e6dbcd" />
      <circle cx="36" cy="15" r="4.5" fill="#e6dbcd" />
      <ellipse cx="40" cy="38" rx="12" ry="18" fill="#b06d26" transform="rotate(-25 40 38)"/>
      <path d="M58,45 L68,18" stroke="#d68a38" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="64" cy="15" r="4.5" fill="#e6dbcd" />
      <circle cx="72" cy="16" r="4.5" fill="#e6dbcd" />
      <ellipse cx="60" cy="38" rx="12" ry="18" fill="#b06d26" transform="rotate(25 60 38)"/>
      <path d="M50,45 L50,12" stroke="#d68a38" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="45" cy="10" r="4.5" fill="#e6dbcd" />
      <circle cx="55" cy="10" r="4.5" fill="#e6dbcd" />
      <ellipse cx="50" cy="35" rx="14" ry="20" fill="#c47b2b" />
      <path d="M25,45 L75,45 L65,85 L35,85 Z" fill="#e0e0e0" />
      <path d="M15,40 L85,40 L65,85 L35,85 Z" fill="#ffffff" stroke="#cccccc" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M15,40 L5,20 L35,40 Z" fill="#f5f5f5" stroke="#cccccc" strokeWidth="1"/>
      <path d="M85,40 L95,20 L65,40 Z" fill="#f5f5f5" stroke="#cccccc" strokeWidth="1"/>
    </g>
  </svg>
);

const SandwichIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <g transform="translate(0, 10)">
      <path d="M15,65 L85,65 L75,78 L25,78 Z" fill="#de9852" stroke="#bd7a33" strokeWidth="2"/>
      <path d="M18,58 L82,58 L78,65 L22,65 Z" fill="#6d4c41" />
      <path d="M15,52 L85,52 L80,58 L20,58 Z" fill="#ffca28" />
      <polygon points="35,58 40,70 45,58" fill="#ffca28" />
      <polygon points="60,58 65,68 70,58" fill="#ffca28" />
      <path d="M16,46 L84,46 L82,52 L18,52 Z" fill="#e53935" />
      <path d="M10,40 Q30,52 50,40 T80,42 T90,40 L85,46 L15,46 Z" fill="#4caf50" />
      <path d="M12,40 Q25,32 40,42 T60,35 T88,40" fill="none" stroke="#4caf50" strokeWidth="4" strokeLinecap="round"/>
      <path d="M25,20 L75,20 L88,40 L12,40 Z" fill="#f4a460" stroke="#cd853f" strokeWidth="2"/>
      <path d="M25,20 L75,20 L70,15 L30,15 Z" fill="#e6baa3" />
    </g>
  </svg>
);

const StromboliPizzaIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <path d="M50,55 L88,40 A40,40 0 1,1 50,15 Z" fill="#f4c430" stroke="#bd6824" strokeWidth="2"/>
    <path d="M88,40 A40,40 0 1,1 50,15" fill="none" stroke="#de7e33" strokeWidth="6" strokeLinecap="round"/>
    <circle cx="35" cy="45" r="4.5" fill="#d32f2f" />
    <circle cx="45" cy="75" r="5" fill="#d32f2f" />
    <circle cx="65" cy="70" r="4.5" fill="#d32f2f" />
    <circle cx="30" cy="60" r="4" fill="#d32f2f" />
    <circle cx="70" cy="50" r="4.5" fill="#d32f2f" />
    <circle cx="50" cy="35" r="4" fill="#d32f2f" />
    <g transform="translate(10, -10)">
      <path d="M50,55 L50,15 A40,40 0 0,1 88,40 Z" fill="#f4c430" stroke="#bd6824" strokeWidth="2"/>
      <path d="M50,15 A40,40 0 0,1 88,40" fill="none" stroke="#de7e33" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="65" cy="30" r="4" fill="#d32f2f" />
      <circle cx="75" cy="38" r="4" fill="#d32f2f" />
    </g>
  </svg>
);

const DrinksIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#cccccc" strokeWidth="2"/>
    <circle cx="50" cy="50" r="32" fill="#f8f9fa" />
    <path d="M45,75 L55,20 L70,12" fill="none" stroke="#e53935" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M45,75 L55,20 L70,12" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="5 5" strokeLinecap="round"/>
    <path d="M36.5,45 L40,75 C40,79 60,79 60,75 L63.5,45 Z" fill="#ffb74d" />
    <ellipse cx="50" cy="45" rx="13.5" ry="3" fill="#ffa726" />
    <rect x="42" y="55" width="7" height="7" fill="#ffffff" opacity="0.6" rx="1" transform="rotate(15 45 58)"/>
    <rect x="52" y="62" width="6" height="6" fill="#ffffff" opacity="0.6" rx="1" transform="rotate(-20 55 65)"/>
    <rect x="48" y="48" width="8" height="8" fill="#ffffff" opacity="0.6" rx="1" transform="rotate(45 52 52)"/>
    <circle cx="43" cy="52" r="1.2" fill="#ffffff" opacity="0.8"/>
    <circle cx="56" cy="58" r="1.5" fill="#ffffff" opacity="0.8"/>
    <circle cx="46" cy="68" r="1" fill="#ffffff" opacity="0.8"/>
    <circle cx="54" cy="50" r="1.2" fill="#ffffff" opacity="0.8"/>
    <path d="M34,30 L40,75 C40,80 60,80 60,75 L66,30" fill="none" stroke="#4fc3f7" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <ellipse cx="50" cy="30" rx="16" ry="4" fill="none" stroke="#4fc3f7" strokeWidth="2" opacity="0.5"/>
    <g transform="translate(34, 30) rotate(-15)">
      <circle cx="0" cy="0" r="10" fill="#fff59d" stroke="#fbc02d" strokeWidth="1.5"/>
      <line x1="-8" y1="0" x2="8" y2="0" stroke="#fbc02d" strokeWidth="1"/>
      <line x1="0" y1="-8" x2="0" y2="8" stroke="#fbc02d" strokeWidth="1"/>
      <line x1="-5.6" y1="-5.6" x2="5.6" y2="5.6" stroke="#fbc02d" strokeWidth="1"/>
      <line x1="-5.6" y1="5.6" x2="5.6" y2="-5.6" stroke="#fbc02d" strokeWidth="1"/>
      <circle cx="0" cy="0" r="7" fill="none" stroke="#fbc02d" strokeWidth="0.5"/>
    </g>
  </svg>
);

const RestaurantMenu = () => {
  const location = useLocation();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>(""); 
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const categories = [
    { id: "Appetizer", name: "Appetizer", image: "https://cdn-icons-png.flaticon.com/512/2515/2515151.png" },
    { id: "AmericanPizza", name: "American Pizza", image: "https://cdn-icons-png.flaticon.com/512/1404/1404945.png" },
    { id: "ItalianPizza", name: "Italian Pizza", image: "https://cdn-icons-png.flaticon.com/512/3595/3595458.png" },
    { id: "StromboliPizza", name: "Stromboli Pizza", customIcon: <StromboliPizzaIcon /> },
    { id: "FriedFood", name: "Fried", customIcon: <FriedChickenIcon /> },
    { id: "Burger", name: "Burger", image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" },
    { id: "Sandwich", name: "Sandwich", customIcon: <SandwichIcon /> },
    { id: "Pasta", name: "Pasta", customIcon: <PastaIcon /> },
    { id: "Steak", name: "Steak", customIcon: <SteakIcon /> },
    { id: "Drinks", name: "Drinks", customIcon: <DrinksIcon /> }
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
      <div className="pt-24 pb-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Restaurant <span className="text-yellow-500">Menu</span></h1>
        <p className="text-gray-400 text-lg">Premium Handcrafted Dishes</p>
      </div>

      <div className={`sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 py-6 shadow-lg overflow-x-auto no-scrollbar transition-transform duration-500 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-start md:justify-center gap-4 px-6 min-w-max mx-auto">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => scrollToCategory(cat.id)} className="flex flex-col items-center group w-28 md:w-32 flex-shrink-0 cursor-pointer relative">
              <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center p-3 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white group-hover:border-4 group-hover:border-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]
                ${activeCategory === cat.id ? 'bg-white border-4 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.5)]' : 'bg-gray-200 border-2 border-transparent'}`}>
                {cat.customIcon ? (
                  cat.customIcon
                ) : (
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-contain drop-shadow-md"/>
                )}
              </div>
              <span className={`text-sm font-extrabold whitespace-nowrap px-4 py-1.5 rounded-full -mt-5 z-10 transition-colors border-2 border-black group-hover:bg-yellow-500 group-hover:text-black
                ${activeCategory === cat.id ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-yellow-500'}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-24">
        {categories.map((category) => {
          const categoryItems = restaurantMenu.filter(item => item.categoryId === category.id);
          if (categoryItems.length === 0) return null;
          
          return (
            <div key={category.id} id={category.id} className="scroll-mt-48">
              <div className="flex flex-col items-center gap-2 mb-10">
                <h2 className="text-4xl font-bold text-white relative inline-block">
                  {category.name}
                  <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-yellow-500 rounded-full"></span>
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {categoryItems.map(item => (
                  <div key={item.id} className="flex flex-col md:flex-row bg-gray-900/40 border border-gray-800 rounded-3xl overflow-hidden hover:border-yellow-500/50 transition-colors group">
                    <div className="w-full md:w-48 h-48 relative overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                            {item.name}
                          </h3>
                          <span className="bg-yellow-500 text-black font-extrabold px-4 py-1 rounded-full text-lg shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                            ${item.price}
                          </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mt-2 line-clamp-2">
                          {item.ingredients.join(', ')}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-end">
                         <button onClick={() => addToCart({ id: String(item.id), name: item.name, price: item.price, image: item.image })} className="text-yellow-500 hover:text-white font-medium flex items-center gap-2 transition-colors cursor-pointer hover:scale-105 active:scale-95 duration-200">
                           + Add to Order
                         </button>
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

export default RestaurantMenu;