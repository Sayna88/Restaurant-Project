function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 md:px-12">
      <div className="max-w-4xl mx-auto pt-12">
        {/* عنوان اصلی صفحه */}
        <h1 className="text-5xl font-bold text-yellow-500 mb-10 tracking-tight text-center md:text-left">
          Our Story
        </h1>

        {/* محتوای متنی داستان رستوران */}
        <div className="space-y-8 text-gray-400 text-lg leading-relaxed border-l-2 border-yellow-500/30 pl-6 md:pl-8">
          <p>
            Founded in 2026, Simo's Restaurant started with a simple dream: to bring authentic flavors, exceptional culinary art, and an unforgettable dining experience to the heart of the city.
          </p>
          
          <p>
            We believe that great food is not just about high-quality ingredients; it is about the passion, culture, and memories shared around the table. Every single dish on our menu is crafted with love and precision, using locally sourced fresh produce to ensure an outstanding experience.
          </p>
          
          <p className="text-white font-medium text-xl italic bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            "From our kitchen to your table, we strive to make every visit a masterpiece."
          </p>
          
          <p>
            Our team of dedicated chefs and friendly staff work together daily to create an atmosphere where you can relax and enjoy the true art of fine dining. Thank you for being a vital part of our journey!
          </p>
        </div>

        {/* بخش ارزش‌ها یا ویژگی‌های کلیدی */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="border border-gray-800 p-6 rounded-xl bg-gray-900/20 text-center hover:border-yellow-500 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-yellow-500 mb-2">Fresh Ingredients</h3>
            <p className="text-gray-400 text-sm">Only the finest and freshest organic produce makes it into our dishes.</p>
          </div>
          <div className="border border-gray-800 p-6 rounded-xl bg-gray-900/20 text-center hover:border-yellow-500 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-yellow-500 mb-2">Expert Chefs</h3>
            <p className="text-gray-400 text-sm">Our culinary experts bring years of passion and creativity to the plate.</p>
          </div>
          <div className="border border-gray-800 p-6 rounded-xl bg-gray-900/20 text-center hover:border-yellow-500 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-yellow-500 mb-2">Premium Vibe</h3>
            <p className="text-gray-400 text-sm">A carefully designed modern environment perfect for every occasion.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;