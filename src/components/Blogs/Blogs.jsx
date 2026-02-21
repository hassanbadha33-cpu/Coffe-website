import React from 'react';
import './Blogs.css';
import blog1 from '../../assets/blog-1.jpeg'




const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Wake Up Your Taste Buds with Our Tasty Blends",
      author: "Admin",
      date: "21st May, 2021",
      desc: "Revitalize your senses with our delicious coffee blends.",
      img: blog1
    },
    {
      id: 2,
      title: "Start Your Day Right with a Cup of Our Coffee",
      author: "Admin",
      date: "1st Jan, 2021",
      desc: "Kickstart your morning with our delicious, refreshing coffee.",
       img: blog1
    },
    {
      id: 3,
      title: "Experience the Ultimate Coffee Refreshment",
      author: "Admin",
      date: "21st Feb, 2023",
      desc: "Indulge in the ultimate coffee refreshment, anytime, anywhere.",
      img: blog1
    }
  ];

  return (
    <section className="journal-section" id="Blogs">
      <h2 className="journal-header">OUR <span>BLOGS</span></h2>
      
      <div className="journal-grid">
        {blogPosts.map((post) => (
          <div className="journal-card" key={post.id}>
            <div className="journal-img-box">
              <img src={post.img} alt="blog" />
            </div>
            <div className="journal-content">
              <h3>{post.title}</h3>
              <p className="journal-meta">By {post.author} / {post.date}</p>
              <p className="journal-text">{post.desc}</p>
              <button className="journal-read-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;