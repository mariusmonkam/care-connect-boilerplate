// src/components/common/BlogPost.tsx
import React from "react";
import "../../styles/BlogPost.css";

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  date,
  author,
  content,
}) => {
  return (
    <div className="blog-post">
      <h1 className="blog-post-title">{title}</h1>
      <div className="blog-post-meta">
        <small>
          {date} by {author}
        </small>
      </div>
      <div className="blog-post-body">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
