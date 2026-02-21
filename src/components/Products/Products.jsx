import React from 'react';
import './Products.css';
import product1 from '../../assets/product-1.png'
import product2 from '../../assets/product-2.png'
import product3 from '../../assets/product-3.png'
const Products = () => {
  const productData = [
    { id: 1, name: "Columbia Coffee", price: "$15.99", oldPrice: "$20.99", img: {product1}},
    { id: 2, name: "Peru Fresh Coffee", price: "$11.99", oldPrice: "$20.99", img: {product2} },
    { id: 3, name: "Nicaragua Coffee", price: "$16.00", oldPrice: "$20.99", img: {product3} },
  ];


  return (
    <section className="products-section" id='Products'>
      <h2 className="products-title">OUR <span>PRODUCTS</span></h2>
      
      <div className="products-container">
        {productData.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-icons">
               <span>❤</span> <span>🛒</span> <span>👁</span>
            </div>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="stars">★★★★☆</div>
            <p className="product-price">
              {item.price} <span>{item.oldPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;