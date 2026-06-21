import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    { name: 'Pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60' },
    { name: 'Burgers', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60' },
    { name: 'Pasta', img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60' },
    { name: 'Steak', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&auto=format&fit=crop&q=60' },
    { name: 'Drinks', img: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&auto=format&fit=crop&q=60' },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-10 pt-20">
        <h1 className="text-6xl font-bold mb-6 tracking-tight">
          Experience the Art of <span className="text-yellow-500">Fine Dining</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-16">
          Welcome to Simo's Restaurant, where every meal is a masterpiece crafted with passion.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full max-w-4xl">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center gap-4 cursor-pointer group">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-800 group-hover:border-yellow-500 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="font-medium text-gray-300 group-hover:text-yellow-500 transition-colors">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 border-t border-gray-800 mt-10">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500">The Taste of Perfection</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            More than just a meal, we offer an unforgettable experience. At Simo's, the warm ambiance, curated music, and exceptional flavors come together to create moments you will cherish.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <style>{`
            @keyframes morph {
              0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
              50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
              100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            }
            .animate-morph {
              animation: morph 6s ease-in-out infinite;
            }
          `}</style>
          
          <div className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] animate-morph overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.3)] border-4 border-yellow-500/30 flex items-center justify-center bg-gray-900/50">
            <img src="https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=612x612&w=0&k=20&c=97rc0VIi-s3mn4xe4xDy9S-XJ_Ohbn92XaEMaiID_eY=" alt="Delicious Pizza" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-black border-t border-gray-800">
        <h2 className="text-4xl font-bold text-center mb-16 text-white max-w-xs mx-auto">
          Culinary Insights
        </h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-500 transition-all duration-500 bg-gray-900/30 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=60" alt="Neapolitan Pizza" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col items-center text-center flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">The Secret of Neapolitan Pizza</h3>
              <p className="text-gray-400 mb-8 flex-1">Discover what makes our dough so airy and light, and why the perfect crust takes 72 hours of fermentation...</p>
              <Link to="/article/pizza" className="relative group/btn overflow-hidden border border-yellow-500 text-yellow-500 px-8 py-2 rounded-full font-bold transition-all duration-300">
                <span className="absolute inset-0 bg-yellow-500 -translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">Read More</span>
              </Link>
            </div>
          </div>

          <div className="group border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-500 transition-all duration-500 bg-gray-900/30 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop&q=60" alt="Fresh Pasta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col items-center text-center flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">A Journey Through Italian Pasta</h3>
              <p className="text-gray-400 mb-8 flex-1">From hand-rolled ravioli to perfectly al dente linguine, explore the rich traditions of our handmade pasta...</p>
              <Link to="/article/pasta" className="relative group/btn overflow-hidden border border-yellow-500 text-yellow-500 px-8 py-2 rounded-full font-bold transition-all duration-300">
                <span className="absolute inset-0 bg-yellow-500 -translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;