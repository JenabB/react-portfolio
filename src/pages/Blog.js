import React from "react";
import blogs from "../data/blogs.json";

const Blog = () => {
  console.log(blogs);
  return (
    <div className="lg:w-4/5 sm:w-full mx-auto p-4">
      {blogs.blogs.map((blog, index) => (
        <div key={index} className="shadow-lg m-2 p-4">
          <div>
            <p>
              {blogs.blogs.indexOf(blog) + 1}. <span>{blog.name}</span>
            </p>
            <div className="flex">
              {blog.category.map((c, index) => (
                <div key={index} className="m-1">
                  <h1 className="bg-yellow-400 rounded-lg text-white py-1 px-2">
                    {c.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
