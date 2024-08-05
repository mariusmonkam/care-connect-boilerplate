// src/components/common/BlogPreview.tsx
import React from "react";
import "../../styles/BlogPreview.css";
import { BlogPreviewData } from "../../types/interfaces"; // Adjust the import path as necessary

const BlogPreview: React.FC<BlogPreviewData> = ({ posts }) => {
  return (
    <div className="blog-preview">
      {posts.map((post, index) => (
        <div key={index} className="post">
          {post.image && (
            <div className="post-image-wrapper">
              <img className="post-image" src={post.image} alt={post.title} />
            </div>
          )}
          <div className="post-content">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-excerpt">{post.excerpt}</p>
            <small className="post-meta">
              {post.date} by {post.author}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPreview;
