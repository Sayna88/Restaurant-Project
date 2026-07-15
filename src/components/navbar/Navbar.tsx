import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex flex-wrap justify-between items-center px-6 md:px-12 py-5 md:py-8 bg-black border-b border-gray-700">
      
      <div className="flex items-center gap-2 z-10">
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-white">Simo's Restaurant</h1>
        <GiKnifeFork className="text-white text-xl md:text-2xl" />
      </div>

      <div className="flex items-center gap-5 md:hidden z-10">
        <Link to="/order" className="relative text-white hover:text-yellow-500 transition-all">
          <FiShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className={`${isOpen ? "flex" : "hidden"} w-full flex-col md:flex md:flex-row md:flex-1 md:items-center md:justify-end mt-6 md:mt-0 transition-all z-10`}>
        <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full md:w-auto md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mb-6 md:mb-0">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="font-bold text-white hover:text-yellow-300 transition-colors uppercase tracking-widest text-sm md:text-base">Home</Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className="font-bold text-white hover:text-yellow-300 transition-colors uppercase tracking-widest text-sm md:text-base">About</Link>
          </li>
        </ul>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link to="/menu-selection" onClick={() => setIsOpen(false)} className="font-bold text-white uppercase tracking-widest border border-yellow-500 px-6 py-2 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:text-black text-sm md:text-base text-center">
            Order Now
          </Link>
          <Link to="/order" className="hidden md:block relative text-white hover:text-yellow-500 transition-all">
            <FiShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;