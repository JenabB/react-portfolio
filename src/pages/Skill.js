import skills from "../data/skills.json";

const Skill = () => {
  return (
    <div>
      <div>
        {skills.skills.map((skill) => (
          <div>
            <div>
              <img
                src={skill.logo}
                alt="skill logo"
                style={{ width: "40px", height: "40px" }}
              />

              <h4>{skill.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
