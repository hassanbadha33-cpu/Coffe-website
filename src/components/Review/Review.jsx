import React from 'react';
import './Review.css';

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "John Deo",
      text: "I've been a loyal customer of this website for years and have never had a bad experience. Their coffee is consistently excellent.",
      img: "src/assets/pic-1.png" 
    },
    {
      id: 2,
      name: "John S.",
      text: "I have been a coffee lover for years and have tried many different brands, but none have come close to the quality and flavor here.",
      img: "src/assets/pic-3.png"
    },
    {
      id: 3,
      name: "Emily P.",
      text: "I recently tried the Ethiopian Yirgacheffe coffee and it was a game-changer. The flavor was so complex and delicious.",
      img: "src/assets/pic-2.png"
    }
  ];

  return (
    <section className="review-section" id='Reviews'>
      <h2 className="review-title">CUSTOMER'S <span>REVIEW</span></h2>
      <div className="review-container">
        {reviews.map((rev) => (
          <div className="review-card" key={rev.id}>
            <div className="quote-icon">“</div>
            <p className="review-text">{rev.text}</p>
            <img src={rev.img} alt={rev.name} className="user-img" />
            <h3>{rev.name}</h3>
            <div className="stars">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;