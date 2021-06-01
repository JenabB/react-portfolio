import skills from "../data/skills.json";

const Skill = () => {
  return (
    <div className="lg:w-4/5 sm:w-full mx-auto">
      <div className="grid grid-cols-3 text-center">
        {skills.skills.map((skill) => (
          <div className="shadow-lg m-2 p-2">
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
    </div>
  );
};

export default Skill;
