import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const articleData = {
    pizza: {
      title: "The Magic of Authentic Neapolitan Pizza",
      mainImg: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=1200&auto=format&fit=crop&q=80",
      p1: "There is something truly magical about a classic Neapolitan pizza. It is not just a meal; it is a symphony of simple, high-quality ingredients coming together in perfect harmony. Our dough is fermented for 72 hours, creating a crust that is impossibly light, airy, and beautifully blistered from the intense heat of our wood-fired oven.",
      quote: "A perfect pizza is a circle of happiness. The charred crust, the sweet tomatoes, and the melting mozzarella create an experience that words can barely describe.",
      quoteImg: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60",
      p2: "We source our San Marzano tomatoes directly from the volcanic soils of Mount Vesuvius, and our fresh buffalo mozzarella is delivered daily. When you take a bite, you are tasting centuries of Italian tradition, passionately recreated right here for your enjoyment."
    },
    pasta: {
      title: "The Art of Handcrafted Italian Pasta",
      mainImg: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200&auto=format&fit=crop&q=80",
      p1: "True Italian pasta is an art form that requires patience, skill, and a deep respect for tradition. Every morning, our chefs combine the finest durum wheat semolina with farm-fresh eggs to create pasta dough that is rich, golden, and perfectly textured. From delicate ribbons of tagliatelle to carefully folded ravioli, every shape is crafted entirely by hand.",
      quote: "Life is a combination of magic and pasta. The perfect 'al dente' bite paired with a slow-simmered sauce is the ultimate comfort food.",
      quoteImg: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60", // یک عکس پاستای روشن و کامل
      p2: "Whether it's tossed in a vibrant pesto made from hand-picked basil, or enveloped in a rich, slow-cooked Bolognese sauce, our pasta dishes are designed to transport you straight to the heart of Italy. It is comfort, elevated."
    }
  };

  const content = id === 'pasta' ? articleData.pasta : articleData.pizza;

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 pb-20">
      <div className="max-w-4xl mx-auto pt-10">
        <Link to="/" className="text-yellow-500 hover:text-white transition-colors mb-8 inline-block">
          &larr; Back to Home
        </Link>
        
        <div className="bg-gray-900/30 p-8 md:p-12 rounded-3xl border border-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-10 text-center tracking-tight">
            {content.title}
          </h1>
          
          <img src={content.mainImg} alt={id} className="w-full h-[400px] object-cover rounded-2xl mb-12 drop-shadow-[0_0_20px_rgba(234,179,8,0.1)]" />

          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <p>{content.p1}</p>
            <div className="flex flex-col md:flex-row items-center gap-8 bg-black/60 p-10 rounded-2xl border border-gray-800 my-12 group hover:border-yellow-500 transition-all duration-300">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <img src={content.quoteImg} alt="Detail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-white font-medium text-2xl italic leading-relaxed">
                  "{content.quote}"
                </p>
              </div>
            </div>
            <p>{content.p2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;