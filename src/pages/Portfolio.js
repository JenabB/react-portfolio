import { useState } from "react";
import { motion } from "framer-motion";

import portfolios from "../data/portfolios.json";

const Portfolio = () => {
  const [query, setQuery] = useState(null);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const items = portfolios.web
    // eslint-disable-next-line array-callback-return
    .filter((data) => {
      if (query == null) return data;
      else if (data.name.toLowerCase().includes(query.toLowerCase())) {
        return data;
      }
    })
    .map((w, index) => {
      return (
        <div key={index} className="shadow bg-white rounded m-4 px-4">
          <div className="flex">
            <img
              src={w.logo}
              alt="logo"
              style={{ width: "70px", height: "70px" }}
              className="my-auto"
            />
            <div className="mx-4 py-4">
              <a href={w.src} target="_blank" rel="noreferrer">
                <h3 className="font-bold">{w.name}</h3>
              </a>
              <p>{w.description}</p>
              <div className="flex flex-wrap">
                {w.tools.map((t) => (
                  <div className="m-1">
                    <h6 className="bg-green-400 text-white p-0 px-1 text-xs rounded-xl">
                      {t.name}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    });
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
      className="w-full shadow-sm bg-gray-100 p-2"
    >
      <div className="text-center my-8">
        <input
          type="search"
          className="rounded-full px-3 py-2"
          placeholder="search"
          onChange={handleQueryChange}
        />
      </div>
      {items}

      <div className="design-container">
        <h1>Design Graphic :{portfolios.design.length}</h1>
        {portfolios.design.map((d) => (
          <div key={d.id}>
            <h1>{d.name}</h1>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
