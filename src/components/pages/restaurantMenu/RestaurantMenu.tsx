import { useState, useEffect } from "react";

const PastaIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <circle cx="50" cy="50" r="46" fill="transparent" stroke="#dee2e6" strokeWidth="2"/>
    <circle cx="50" cy="50" r="38" fill="transparent" stroke="#e9ecef" strokeWidth="1"/>
    <circle cx="50" cy="50" r="34" fill="none" stroke="#dee2e6" strokeWidth="1" strokeDasharray="3,3"/>
    <path d="M32,52 Q42,32 54,48 T72,48" fill="none" stroke="#f4c430" strokeWidth="4.5" strokeLinecap="round"/>
    <path d="M34,44 Q46,62 58,42 T68,56" fill="none" stroke="#e0a800" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M26,46 Q48,28 64,46 T74,38" fill="none" stroke="#f4c430" strokeWidth="4" strokeLinecap="round"/>
    <path d="M30,58 Q52,68 66,50 T70,42" fill="none" stroke="#e0a800" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M38,36 Q50,58 62,34" fill="none" stroke="#f4c430" strokeWidth="4" strokeLinecap="round"/>
    <path d="M42,64 Q54,34 64,58" fill="none" stroke="#e0a800" strokeWidth="3" strokeLinecap="round"/>
    <path d="M44,46 C40,42 48,34 56,38 C62,40 64,48 58,54 C52,58 46,54 44,46 Z" fill="#d32f2f"/>
    <path d="M48,48 C46,44 50,38 54,40 C58,42 57,48 52,50 Z" fill="#b71c1c"/>
    <path d="M46,38 C42,34 48,30 50,34 C52,38 48,40 46,38 Z" fill="#388e3c"/>
    <path d="M55,44 C59,41 62,46 58,49 C55,51 52,47 55,44 Z" fill="#2e7d32"/>
    <path d="M42,48 C39,49 38,44 41,42 C44,40 45,45 42,48 Z" fill="#4caf50"/>
  </svg>
);

const SteakIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <circle cx="50" cy="50" r="46" fill="transparent" stroke="#dee2e6" strokeWidth="2"/>
    <circle cx="50" cy="50" r="38" fill="transparent" stroke="#e9ecef" strokeWidth="1"/>
    <path d="M34,46 C30,34 46,24 64,30 C76,34 78,52 70,66 C62,76 42,74 36,64 C32,58 36,52 34,46 Z" fill="#5d4037"/>
    <path d="M36,46 C33,36 46,27 61,32 C71,35 73,50 67,61 C60,70 43,69 38,60 C35,55 38,50 36,46 Z" fill="#4e342e"/>
    <line x1="44" y1="34" x2="56" y2="48" stroke="#271714" strokeWidth="3" strokeLinecap="round"/>
    <line x1="52" y1="34" x2="64" y2="48" stroke="#271714" strokeWidth="3" strokeLinecap="round"/>
    <line x1="60" y1="37" x2="70" y2="49" stroke="#271714" strokeWidth="3" strokeLinecap="round"/>
    <line x1="38" y1="42" x2="48" y2="54" stroke="#271714" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="28" cy="34" r="3" fill="#4caf50"/>
    <circle cx="24" cy="40" r="3" fill="#388e3c"/>
    <circle cx="26" cy="46" r="2.5" fill="#4caf50"/>
    <circle cx="21" cy="45" r="3" fill="#2e7d32"/>
    <path d="M62,66 Q70,72 60,78 Z" fill="#ffb74d" stroke="#f57c00" strokeWidth="0.5"/>
    <path d="M50,70 Q58,78 48,82 Z" fill="#ffa726" stroke="#e65100" strokeWidth="0.5"/>
    <path d="M68,56 Q76,62 70,70 Z" fill="#ffcc80" stroke="#f57c00" strokeWidth="0.5"/>
  </svg>
);

const FriedChickenIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <circle cx="50" cy="50" r="46" fill="transparent" stroke="#dee2e6" strokeWidth="2"/>
    <circle cx="50" cy="50" r="38" fill="transparent" stroke="#e9ecef" strokeWidth="1"/>
    {/* Bucket */}
    <path d="M30,70 L35,40 L65,40 L70,70 Z" fill="#ffffff" stroke="#d32f2f" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M35,40 L65,40 L65,46 L35,46 Z" fill="#d32f2f" />
    <line x1="45" y1="46" x2="43" y2="70" stroke="#d32f2f" strokeWidth="2.5"/>
    <line x1="55" y1="46" x2="57" y2="70" stroke="#d32f2f" strokeWidth="2.5"/>
    {/* Chicken Legs */}
    <path d="M40,22 L37,14 L43,14 Z" fill="#f5f5f5" stroke="#9e9e9e" strokeWidth="1"/>
    <path d="M60,22 L57,14 L63,14 Z" fill="#f5f5f5" stroke="#9e9e9e" strokeWidth="1"/>
    <path d="M45,40 C48,25 32,25 40,40 Z" fill="#e67e22" stroke="#d35400" strokeWidth="2"/>
    <path d="M55,40 C52,25 68,25 60,40 Z" fill="#e67e22" stroke="#d35400" strokeWidth="2"/>
    <path d="M50,40 C50,22 40,28 50,40 Z" fill="#d35400" stroke="#c0392b" strokeWidth="1.5"/>
  </svg>
);

const SandwichIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <circle cx="50" cy="50" r="46" fill="transparent" stroke="#dee2e6" strokeWidth="2"/>
    <circle cx="50" cy="50" r="38" fill="transparent" stroke="#e9ecef" strokeWidth="1"/>
    {/* Top Bread */}
    <path d="M25,44 Q50,26 75,44 L70,50 L30,50 Z" fill="#f4a460" stroke="#cd853f" strokeWidth="2"/>
    {/* Lettuce */}
    <path d="M27,51 Q35,47 45,52 T65,50 T73,53 L70,55 L30,55 Z" fill="#8bc34a" />
    {/* Tomato */}
    <rect x="30" y="55" width="40" height="4" rx="2" fill="#e53935" />
    {/* Cheese */}
    <path d="M30,59 L70,59 L75,64 L65,60 L55,64 L45,60 L35,64 L25,60 Z" fill="#fbc02d" />
    {/* Meat */}
    <rect x="32" y="62" width="36" height="6" rx="3" fill="#795548" />
    {/* Bottom Bread */}
    <path d="M30,68 L70,68 Q65,76 50,76 Q35,76 30,68 Z" fill="#f4a460" stroke="#cd853f" strokeWidth="2"/>
  </svg>
);

interface MenuItem {
  id: number;
  categoryId: string;
  name: string;
  ingredients: string[];
  image: string;
  price: number;
}

const localMenuData: MenuItem[] = [
  {
    id: 1,
    categoryId: "Appetizers",
    name: "Classic Margherita",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil"],
    price: 11.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    categoryId: "AmericanPizza",
    name: "Pepperoni Feast",
    ingredients: ["Double pepperoni", "Mozzarella", "Tomato sauce", "Garlic crust"],
    price: 14.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    categoryId: "ItalianPizza",
    name: "Neapolitan Authentic",
    ingredients: ["San Marzano tomatoes", "Buffalo mozzarella", "Extra virgin olive oil"],
    price: 16.50,
    image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 4,
    categoryId: "StromboliPizza",
    name: "Meat Lovers Stromboli",
    ingredients: ["Rolled pizza dough", "Sausage", "Bacon", "Mozzarella", "Marinara"],
    price: 13.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 5,
    categoryId: "FriedChicken",
    name: "Crispy Fried Bucket",
    ingredients: ["8pcs Fried Chicken", "Secret Spices", "Fries", "Coleslaw"],
    price: 19.99,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 6,
    categoryId: "Burger",
    name: "Double Cheese Burger",
    ingredients: ["Two Beef Patties", "Cheddar", "Lettuce", "Tomato", "Special Sauce"],
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 7,
    categoryId: "Sandwich",
    name: "Club Sandwich",
    ingredients: ["Roasted Turkey", "Bacon", "Lettuce", "Tomato", "Mayo", "Toasted Bread"],
    price: 9.99,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 8,
    categoryId: "Pasta",
    name: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Pancetta", "Eggs", "Parmesan", "Black Pepper"],
    price: 15.50,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 9,
    categoryId: "Steak",
    name: "Ribeye Steak",
    ingredients: ["12oz Ribeye", "Garlic Herb Butter", "Mashed Potatoes", "Asparagus"],
    price: 32.99,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=500"
  }
];

const RestaurantMenu = () => {
  const [activeCategory, setActiveCategory] = useState<string>(""); 
  
  const categories = [
    { id: "Appetizer", name: "Appetizer", image: "https://cdn-icons-png.flaticon.com/512/2515/2515151.png" },
    { id: "AmericanPizza", name: "American Pizza", image: "https://cdn-icons-png.flaticon.com/512/1404/1404945.png" },
    { id: "ItalianPizza", name: "Italian Pizza", image: "https://cdn-icons-png.flaticon.com/512/3595/3595458.png" },
    { id: "StromboliPizza", name: "Stromboli Pizza", image: "https://cdn-icons-png.flaticon.com/512/3595/3595475.png" },
    { id: "FriedChicken", name: "Fried Chicken", customIcon: <FriedChickenIcon /> }, // تغییر به SVG
    { id: "Burger", name: "Burger", image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" },
    { id: "Sandwich", name: "Sandwich", customIcon: <SandwichIcon /> }, // تغییر به SVG
    { id: "Pasta", name: "Pasta", customIcon: <PastaIcon /> },
    { id: "Steak", name: "Steak", customIcon: <SteakIcon /> }
  ];

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="pt-24 pb-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Restaurant <span className="text-yellow-500">Menu</span></h1>
        <p className="text-gray-400 text-lg">Premium Handcrafted Dishes</p>
      </div>

      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 py-6 shadow-lg overflow-x-auto no-scrollbar">
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
          const categoryItems = localMenuData.filter(item => item.categoryId === category.id);
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
                           <button className="text-yellow-500 hover:text-white font-medium flex items-center gap-2 transition-colors cursor-pointer">+ Add to Order</button>
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