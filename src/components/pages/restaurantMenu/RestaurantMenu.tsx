import { useState, useEffect } from "react";

// تعریف تایپ‌ها بر اساس دیتایی که از DummyJSON می‌گیریم
interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  image: string;
  mealType: string[]; // مثلا ["Dinner", "Lunch"]
}

const RestaurantMenu = () => {
  const [items, setItems] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  // ما دسته‌بندی‌ها رو خودمون تعریف می‌کنیم تا بالای صفحه قشنگ چیده بشن
  // و بعد غذاهای API رو بر اساس اینا فیلتر می‌کنیم
  const categories = [
    { id: "Snack", name: "Starters", icon: "🥗" },
    { id: "Lunch", name: "Main Course", icon: "🍝" },
    { id: "Dinner", name: "Dinner", icon: "🍕" },
    { id: "Beverage", name: "Drinks", icon: "🍹" }
  ];

  // درخواست به API واقعی
  useEffect(() => {
    window.scrollTo(0, 0);

    // استفاده از API واقعی برای گرفتن لیست غذاها
    fetch('https://dummyjson.com/recipes?limit=30')
      .then(res => res.json())
      .then(data => {
        setItems(data.recipes);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching data from API: ", err));
  }, []);

  // تابع اسکرول نرم (Smooth Scroll)
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-black text-yellow-500 flex items-center justify-center text-2xl font-bold">Loading Menu from API...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      
      {/* هدر */}
      <div className="pt-24 pb-10 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Restaurant <span className="text-yellow-500">Menu</span></h1>
        <p className="text-gray-400 text-lg">Real data fetched from API</p>
      </div>

      {/* نوار دسته‌بندی‌ها (Sticky) */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800 py-4 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 flex overflow-x-auto gap-4 justify-start md:justify-center no-scrollbar">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className="flex items-center gap-2 bg-gray-900 border border-gray-700 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all px-6 py-3 rounded-full flex-shrink-0 cursor-pointer"
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="font-bold text-gray-200">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* لیست غذاها */}
      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-20">
        {categories.map(category => {
          // فیلتر کردن غذاهایی که تایپشون با دسته‌بندی ما یکی باشه
          const categoryItems = items.filter(item => item.mealType.includes(category.id));
          
          // اگر API برای این دسته غذایی نداشت، اصلاً نشونش نده
          if (categoryItems.length === 0) return null;

          return (
            <div key={category.id} id={category.id} className="scroll-mt-32">
              {/* تیتر دسته */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="text-3xl font-bold text-yellow-500 border-b-2 border-yellow-500/30 pb-2 w-full">
                  {category.name}
                </h2>
              </div>

              {/* کارت‌های غذا */}
              <div className="flex flex-col gap-6">
                {categoryItems.map(item => {
                  // ترفند: ساخت یک قیمت ظاهری با استفاده از ID غذا تا منو واقعی به نظر برسه
                  const fakePrice = `$${(10 + (item.id % 15))}.99`;

                  return (
                    <div key={item.id} className="flex flex-col md:flex-row bg-gray-900/40 border border-gray-800 rounded-3xl overflow-hidden hover:border-yellow-500/50 transition-colors group">
                      
                      <div className="w-full md:w-48 h-48 relative overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                              {item.name}
                            </h3>
                            <span className="bg-yellow-500 text-black font-extrabold px-4 py-1 rounded-full text-lg shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                              {fakePrice}
                            </span>
                          </div>
                          {/* نمایش مواد اولیه که تو API به صورت آرایه هست */}
                          <p className="text-gray-400 leading-relaxed mt-2 line-clamp-2">
                            {item.ingredients.join(', ')}
                          </p>
                        </div>
                        
                        <div className="mt-4 flex justify-end">
                           <button className="text-yellow-500 hover:text-white font-medium flex items-center gap-2 transition-colors cursor-pointer">
                             + Add to Order
                           </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default RestaurantMenu;