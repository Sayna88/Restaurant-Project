import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-8 bg-black border-b border-gray-700">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold tracking-tighter text-white">Simo's Restaurant</h1>
        <GiKnifeFork className="text-white text-2xl" />
      </div>

      <ul className="flex flex-1 justify-start gap-10 pl-105">
        <li>
          <Link to="/" className="font-bold text-white hover:text-yellow-300 transition-colors uppercase tracking-widest">Home</Link>
        </li>

        <li>
          <Link to="/about" className="font-bold text-white hover:text-yellow-300 transition-colors uppercase tracking-widest">About</Link>
        </li>
      </ul>

      <button className="font-bold text-white uppercase tracking-widest border border-yellow-500 px-6 py-2 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:text-black">Order Now</button>

      <Link to="/order" className="relative text-white hover:text-yellow-500 transition-all ml-4">
        <FiShoppingCart size={24} />
        {/* دایره قرمز برای نمایش تعداد سفارش */}
        <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          0
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;