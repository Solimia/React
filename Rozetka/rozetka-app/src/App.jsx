import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Rating from "./components/Rating";


const products = [
  {
    id: 1,
    title: "Підніжка велосипеда Myspace",
    price: '250',
    oldPrice: '270',
    discount: "-7%",
    inStock: true,
    rating: 4,
    reviews: 18,
    image: "/images/bike.png", 
  },
  {
    id: 2,
    title: "Мастило Nowax NX-40 200мл",
    price: 369,
    oldPrice: 404,
    discount: "",
    inStock: false,
    rating: 3,
    reviews: 0,
    image: "/images/мастило.png",
  },
    {
    id: 3,
    title: "Мастило для воріт та петель CX80 SMAR BIALY (500 мл)",
    price: 250,
    oldPrice: 312,
    discount: "-20%",
    inStock: true,
    rating: 5,
    reviews: 12,
    image: "/images/МастилоДляВоріт.png",
  },
    {
    id: 4,
    title: "Автомобильный двухсторонний скотч 3М Plus 6 мм x 2 м x 1.1 мм Чорний ",
    price: 109,
    inStock: true,
    rating: 4,
    reviews: 3,
    image: "/images/наліпка.png",
  },
    {
    id: 5,
    title: "Клавіатура Attack Shark X85 Wireless Mechanical Keyboard ",
    price: 0,
    oldPrice: 5999,
    discount: "-100%",
    inStock: true,
    rating: 5,
    reviews: "99+",
    image: "/images/клавіатура.png",
  },
];

function App() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
