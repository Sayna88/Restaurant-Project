import { Link } from "react-router-dom";
import { useEffect } from "react";

const MenuSelection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          Select Your <span className="text-yellow-500">Menu</span>
        </h1>
        <p className="text-gray-400 text-lg">Choose a category to explore our delicious offerings</p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl justify-center items-stretch">
        <Link to="/order/restaurant" className="group bg-gray-900/30 border-2 border-gray-800 rounded-[40px] p-8 w-full md:w-[400px] flex flex-col items-center transition-all duration-500 hover:border-yellow-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]">

          <div className="w-full h-64 rounded-[30px] overflow-hidden mb-8 border border-gray-800 group-hover:border-yellow-500/50 transition-colors">
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop" alt="Restaurant" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
          </div>

          <h2 className="text-3xl font-bold mb-8 group-hover:text-yellow-500 transition-colors text-center">Restaurant Menu</h2>
          
          <div className="w-full bg-gray-800 group-hover:bg-yellow-500 py-4 rounded-2xl text-center font-bold text-xl transition-all duration-300 group-hover:text-black">Enter</div>
        </Link>

        <Link to="/order/cafe" className="group bg-gray-900/30 border-2 border-gray-800 rounded-[40px] p-8 w-full md:w-[400px] flex flex-col items-center transition-all duration-500 hover:border-yellow-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]">
          
          <div className="w-full h-64 rounded-[30px] overflow-hidden mb-8 border border-gray-800 group-hover:border-yellow-500/50 transition-colors">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop" alt="Cafe" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 group-hover:text-yellow-500 transition-colors text-center">Cafe Menu</h2>

          <div className="w-full bg-gray-800 group-hover:bg-yellow-500 py-4 rounded-2xl text-center font-bold text-xl transition-all duration-300 group-hover:text-black">Enter</div>
        </Link>
      </div>
    </div>
  );
};

export default MenuSelection;