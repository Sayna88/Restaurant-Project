const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-10">
        <h1 className="text-6xl font-bold mb-6 tracking-tight">
          Experience the Art of <span className="text-yellow-500">Fine Dining</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-10">
          Welcome to Simo's Restaurant, where every meal is a masterpiece crafted with passion and fresh ingredients.
        </p>
        <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all">
          Explore Menu
        </button>
      </div>

      <section className="py-20 px-12 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-center mb-16">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="border border-gray-800 p-6 rounded-2xl hover:border-yellow-500 transition-all duration-300 bg-gray-900/30">
            <div className="w-full h-60 bg-gray-700 rounded-lg mb-6 overflow-hidden">
                <img src="https://dinnerthendessert.com/wp-content/uploads/2023/06/Supreme-Pizza-1-3.jpg" alt="Pizza" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Pepperoni Supreme</h3>
            <p className="text-gray-400 mb-4">Spicy pepperoni slices with a generous layer of melted mozzarella.</p>
            <span className="text-yellow-500 font-bold text-lg">$19.00</span>
          </div>
          
          <div className="border border-gray-800 p-6 rounded-2xl hover:border-yellow-500 transition-all duration-300 bg-gray-900/30">
            <div className="w-full h-60 bg-gray-700 rounded-lg mb-6 overflow-hidden">
               <img src="https://betterfoodguru.com/wp-content/uploads/2024/05/garden-salad-3.jpg" alt="Salad" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Garden Salad</h3>
            <p className="text-gray-400 mb-4">Refreshing seasonal greens and feta cheese.</p>
            <span className="text-yellow-500 font-bold text-lg">$18.00</span>
          </div>

          <div className="border border-gray-800 p-6 rounded-2xl hover:border-yellow-500 transition-all duration-300 bg-gray-900/30">
            <div className="w-full h-60 bg-gray-700 rounded-lg mb-6 overflow-hidden">
               <img src="https://somuchfoodblog.com/wp-content/uploads/2025/03/Truffle-Mushroom-Pasta9.jpg" alt="Pasta" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Truffle Pasta</h3>
            <p className="text-gray-400 mb-4">Creamy pasta with aromatic black truffle.</p>
            <span className="text-yellow-500 font-bold text-lg">$28.00</span>
          </div>

        </div>
      </section>

      <section className="py-24 px-12 mb-20 bg-yellow-500 border-y border-yellow-800 text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Opening Hours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-black">
          <div className="p-4 border border-yellow-950 rounded-lg">
            <p className="font-bold">Lunch & Dinner</p>
            <p className="text-gray-500">13:00 - 00:00</p>
          </div>
          <div className="p-4 border border-yellow-950 rounded-lg">
            <p className="font-bold">Reservations</p>
            <p className="text-gray-500">Call: +1 234 567 890</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;