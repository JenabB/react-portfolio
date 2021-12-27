import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      companyName: "BuildBuddy",
      time: "2021 November - Now",
      location: "Sidney, Australia",
      tasks: [
        {
          taskId: 1,
          name: "Implement UI Design to React Component",
        },
        {
          taskId: 2,
          name: "Integration API from Backend",
        },
        {
          taskId: 3,
          name: "Fixing Dark Mode Issues",
        },
      ],
    },
  ];
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
      className="bg-gray-50 h-screen pt-4"
    >
      <div>
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow-lg p-4 mx-4">
            <h1 className="text-yellow-600 font-bold">{exp.companyName}</h1>
            <h3 className="text-md mb-2">{exp.location}</h3>
            <p className="text-sm">{exp.time}</p>

            <hr />
            <div className="mt-4">
              {exp.tasks.map((task, index) => (
                <div key={index} className="flex">
                  <p className="mr-4 text-sm">{task.taskId}.</p>
                  <p className="text-sm">{task.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
