import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <img src="images/blog-1.jpg" className="img-fluid" alt="Blog card" />
      <div className="blog-content">
        <p className="mb-3">July 20, 2024</p>
        <h6 className="mb-3">
          The Ultimate Guide to Marketing Strategies to Improve Sales
        </h6>
        <p className="mb-2">
          Many things about electronic devices your kids don't want you to
          knowHow storage devices can
        </p>
        <Link to="/blog:id"> Read More </Link>
      </div>
    </div>
  );
};

export default BlogCard;
