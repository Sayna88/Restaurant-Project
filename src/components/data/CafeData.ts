export interface CafeItem {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
  image: string;
  categoryId: string;
}

export const cafeMenu: CafeItem[] = [
  // Hot Drinks
  { 
    id: "h1", 
    name: "Espresso", 
    price: 3.5, 
    ingredients: ["Double shot of premium Arabica beans", "Rich crema"], 
    image: "https://images.unsplash.com/photo-1510707577719-fa7c14a5d301?w=500&auto=format&fit=crop&q=60", 
    categoryId: "HotDrinks" 
  },
  { 
    id: "h2", 
    name: "Cappuccino", 
    price: 4.5, 
    ingredients: ["Espresso shot", "Steamed milk", "Thick layer of velvet foam"], 
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=60", 
    categoryId: "HotDrinks" 
  },
  { 
    id: "h3", 
    name: "Café Latte", 
    price: 4.8, 
    ingredients: ["Espresso", "Abundant steamed milk", "Light layer of foam"], 
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=60", 
    categoryId: "HotDrinks" 
  },

  // Cold Drinks
  { 
    id: "c1", 
    name: "Iced Americano", 
    price: 4.0, 
    ingredients: ["Espresso shots poured over ice", "Chilled water"], 
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=60", 
    categoryId: "ColdDrinks" 
  },
  { 
    id: "c2", 
    name: "Caramel Frappé", 
    price: 5.5, 
    ingredients: ["Blended espresso", "Milk", "Ice", "Homemade caramel syrup", "Whipped cream"], 
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60", 
    categoryId: "ColdDrinks" 
  },

  // Teas & Herbal
  { 
    id: "t1", 
    name: "Matcha Latte", 
    price: 5.2, 
    ingredients: ["Ceremonial Japanese matcha", "Steamed almond milk", "Touch of honey"], 
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=60", 
    categoryId: "Teas" 
  },
  { 
    id: "t2", 
    name: "Earl Grey Supreme", 
    price: 3.8, 
    ingredients: ["Black tea infused with natural bergamot oil", "Served with lemon slice"], 
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60", 
    categoryId: "Teas" 
  },

  // Cakes & Pastries
  { 
    id: "p1", 
    name: "Chocolate Fudge Cake", 
    price: 6.0, 
    ingredients: ["Rich Belgian chocolate layers", "Moist sponge", "Warm chocolate ganache"], 
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60", 
    categoryId: "Cakes" 
  },
  { 
    id: "p2", 
    name: "Butter Croissant", 
    price: 3.5, 
    ingredients: ["Flaky, multi-layered French pastry", "Pure butter", "Served warm"], 
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60", 
    categoryId: "Cakes" 
  }
];