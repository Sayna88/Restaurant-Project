function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 md:py-16 px-6 md:px-12 text-center text-gray-300">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
      
        <div className="mb-8">
           <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 tracking-tighter">
             Simo's Restaurant
           </h2>
        </div>

        <div className="space-y-4 mb-10 text-sm md:text-base">
          <p className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span>📍</span> 123 Culinary Ave, Gourmet District
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
            <p>📞 +1 234 567 890</p>
            <p>📞 +1 987 654 321</p>
          </div>
          <p className="font-bold text-yellow-300 mt-4">Manager: Simo</p>
        </div>

        <div className="text-xs md:text-sm text-gray-600 border-t border-gray-800 pt-8 w-full">
          &copy; {new Date().getFullYear()} Simo's Restaurant. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;