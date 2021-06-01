import React from "react";
import blogs from "../data/blogs.json";

const Blog = () => {
  console.log(blogs);
  return (
    <div>
      {blogs.blogs.map((blog) => (
        <div>
          <div>
            <h1>{blog.name}</h1>
            <h1>{blog.category}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
