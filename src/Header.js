import profile from "./assets/images/profile.png";

const Header = () => {
  return (
    <div className="lg:w-4/5 sm:w-full mx-auto shadow text-center">
      <img src={profile} alt="profile" className="w-full" />
      <div className="p-4">
        <h1 className="font-bold text-xl">Yogi Surya Pranata</h1>
        <h2>Junior Front-End Developer</h2>
      </div>
    </div>
  );
};

export default Header;
