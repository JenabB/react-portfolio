import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Certificate from "./pages/Certificate";
import Skill from "./pages/Skill";
import About from "./pages/About";
import Blog from "./pages/Blog";

export default function Navigation() {
  return (
    <Router>
      <div className="lg:w-4/5 sm:w-full mx-auto">
        <ul className="flex justify-center">
          <li className="m-2">
            <Link to="/">About</Link>
          </li>
          <li className="m-2">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="m-2">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="m-2">
            <Link to="/skill">Skill</Link>
          </li>
          <li className="m-2">
            <Link to="/certificate">Certificate</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          {/* <Route path="/blog">
            <Blog />
          </Route> */}
          <Route path="/skill">
            <Skill />
          </Route>
          <Route path="/certificate">
            <Certificate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
