import React from "react";
import blogs from "../data/blogs.json";

const Blog = () => {
  console.log(blogs);
  return (
    <div className="lg:w-4/5 sm:w-full mx-auto py-4">
      {blogs.blogs.map((blog, index) => (
        <div className="shadow-lg m-2 p-2" key={index}>
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
