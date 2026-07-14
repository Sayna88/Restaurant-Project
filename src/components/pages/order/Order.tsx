import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const DeleteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

const Order = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center md:text-left border-b border-gray-800 pb-4">
          Your <span className="text-yellow-500">Orders</span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 space-y-6">
            <p className="text-gray-500 text-xl">Your basket is currently empty.</p>
            <div className="flex justify-center gap-4">

              <Link to="/order/restaurant" className="bg-gray-900 border border-yellow-500/30 text-yellow-500 px-6 py-2 rounded-full font-medium hover:bg-yellow-500 hover:text-black transition-all">
                Restaurant Menu
              </Link>

              <Link to="/order/cafe" className="bg-gray-900 border border-amber-500/30 text-amber-500 px-6 py-2 rounded-full font-medium hover:bg-amber-500 hover:text-black transition-all">
                Café Menu
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-gray-900/40 border border-gray-800 rounded-2xl p-4 md:p-6 hover:border-gray-700 transition-colors gap-4">
                  <div className="flex items-center gap-4 md:gap-6 flex-1">

                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-800 border border-gray-700">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.name}</h3>
                      <p className="text-yellow-500 font-extrabold">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-red-500/10 cursor-pointer" title="Remove item">
                      <DeleteIcon />
                    </button>

                    <div className="flex items-center bg-gray-950 border border-gray-800 rounded-xl p-1 shadow-inner">
                      <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                        <MinusIcon />
                      </button>
    
                      <span className="w-8 text-center font-bold text-sm text-yellow-500">
                        {item.quantity}
                      </span>

                      <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Payable Amount</p>
                <h2 className="text-3xl font-black text-white tracking-wide">
                  Total: <span className="text-yellow-500">${getTotalPrice().toFixed(2)}</span>
                </h2>
              </div>
              <button className="w-full md:w-auto bg-yellow-500 text-black font-extrabold px-10 py-4 rounded-xl shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:shadow-[0_0_35px_rgba(234,179,8,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300 text-lg cursor-pointer">
                Proceed to Checkout
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Order;