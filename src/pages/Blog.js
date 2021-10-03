import React from "react";
import blogs from "../data/blogs.json";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className="bg-gray-100 p-4"
    >
      {blogs.blogs.map((blog, index) => (
        <div key={index} className="bg-white shadow-lg m-2 p-4">
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
    </motion.div>
  );
};

export default Blog;
