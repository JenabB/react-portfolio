import './App.css';
import Header from './Header';
import Navigation from './Navigation';

function App() {
  return (
    <div className="lg:w-2/5 w-full mx-auto lg:my-10 bg-white rounded-xl">
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
