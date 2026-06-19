import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all">↑</button>
    )
  );
};

export default ScrollToTop;