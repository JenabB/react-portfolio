import profile from "./assets/images/profile.png";

const Header = () => {
  return (
    <div className="text-center w-4/5 mx-auto">
      <img src={profile} alt="profile" className="w-full" />
      <div className="p-4">
        <h1>Yogi Surya Pranata</h1>
        <h2>Junior Front-End Developer</h2>
      </div>
    </div>
  );
};

export default Header;
