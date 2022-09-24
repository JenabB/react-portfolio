import { useState } from "react";
import { motion } from "framer-motion";
import personalProject from "../data/personalProject.json";

const PersonalProject = () => {
  const [query, setQuery] = useState(null);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const items = personalProject.web
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
          <div className="flex justify-start items-start">
            <img
              src={w.logo}
              alt="logo"
              style={{ width: "50px", height: "50px" }}
              className="mt-5"
            />
            <div className="mx-4 py-4">
              <a href={w.src} target="_blank" rel="noreferrer">
                <h3 className="font-bold">{w.name}</h3>
              </a>
              <p style={{ fontSize: "15px" }}>{w.description}</p>
              {w.features ? (
                <div className="m-2 my-4">
                  <ol>
                    {w.features.map((el) => (
                      <li
                        style={{
                          margin: "4px",
                          fontSize: "12px",
                          display: "list-item",
                          listStylePosition: "circle",
                        }}
                      >
                        {el}
                      </li>
                    ))}
                  </ol>
                </div>
              ) : (
                ""
              )}

              <div className="flex flex-wrap">
                {w.tools.map((t) => (
                  <div className="m-1">
                    <p className="bg-green-400 text-white p-1 px-2 text-xs rounded-xl">
                      {t.name}
                    </p>
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
        <h1>Design Graphic :{personalProject.design.length}</h1>
        {personalProject.design.map((d) => (
          <div key={d.id}>
            <h1>{d.name}</h1>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PersonalProject;
