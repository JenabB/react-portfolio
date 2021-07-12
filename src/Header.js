import profile from './assets/images/profile.png';

const Header = () => {
  return (
    <div className="sm:w-full mx-auto shadow rounded-2xl text-center">
      <img
        src={profile}
        alt="profile"
        className="w-full object-cover rounded-t-xl"
        style={{ height: '350px' }}
      />
      <div className="p-4 bg-blue-500 text-white">
        <h1 className="font-bold text-xl">Yogi Surya Pranata</h1>
        <h2>Junior Front-End Developer</h2>
      </div>
    </div>
  );
};

export default Header;
