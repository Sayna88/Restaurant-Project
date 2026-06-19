function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-16 px-12 text-center text-gray-300">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
      
        <div className="mb-8">
           <h2 className="text-3xl font-bold text-yellow-300 tracking-tighter">
             Simo's Restaurant
           </h2>
        </div>

        <div className="space-y-4 mb-10">
          <p className="flex items-center justify-center gap-2">
            <span>📍</span> 123 Culinary Ave, Gourmet District
          </p>
          <div className="flex gap-8 justify-center">
            <p>📞 +1 234 567 890</p>
            <p>📞 +1 987 654 321</p>
          </div>
          <p className="font-bold text-yellow-300">Manager: Simo</p>
        </div>

        <div className="text-sm text-gray-600 border-t border-gray-800 pt-8 w-full">
          &copy; {new Date().getFullYear()} Simo's Restaurant. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;