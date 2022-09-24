import { useState } from "react";
import { motion } from "framer-motion";
import skills from "../data/skills.json";
import _ from "lodash";

const Skill = () => {
  const grouped = _.groupBy(skills.skills, ({ category }) => {
    return category;
  });
  const data = [];

  for (const [key, value] of Object.entries(grouped)) {
    data.push({ category: key, data: value });
  }

  console.log(data, "data");
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
      {data.map((skill, index) => (
        <div className="m-2 my-4" key={index}>
          <h1>{skill.category}</h1>
          <div className="grid grid-cols-3 lg:grid-cols-4 text-center">
            {skill.data.map((data, index) => (
              <div className="bg-white m-2 p-2 rounded-md" key={index}>
                <div className="text-center">
                  <img
                    className="w-2/4 h-2/4 mx-auto my-2"
                    src={data.logo}
                    alt="skill logo"
                  />
                </div>
                <p className="text-xs">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="grid grid-cols-3 lg:grid-cols-4 text-center"></div>
    </motion.div>
  );
};

export default Skill;
