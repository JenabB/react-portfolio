import skills from '../data/skills.json';

const Skill = () => {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-3 lg:grid-cols-4 text-center">
        {skills.skills.map((skill, index) => (
          <div className=" mx-2 p-2" key={index}>
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
