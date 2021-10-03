import skills from "../data/skills.json";
import { motion } from "framer-motion";

const Skill = () => {
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
      <div className="grid grid-cols-3 lg:grid-cols-4 text-center">
        {skills.skills.map((skill, index) => (
          <div className="bg-white m-2 p-2" key={index}>
            <div className="text-center">
              <img
                className="w-2/4 h-2/4 mx-auto my-2"
                src={skill.logo}
                alt="skill logo"
              />
            </div>
            <h5>{skill.name}</h5>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skill;
