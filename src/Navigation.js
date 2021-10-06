import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Certificate from "./pages/Certificate";
import Skill from "./pages/Skill";
import About from "./pages/About";
import Blog from "./pages/Blog";

export default function Navigation() {
  return (
    <Router>
      <div>
        <div className="flex w-full justify-center bg-blue-400 text-white">
          <NavLink
            to="/"
            className="mx-2 p-1 px-2"
            exact
            activeStyle={{
              color: "#60A5FA",
              backgroundColor: "white",
            }}
          >
            About
          </NavLink>

          <NavLink
            to="/portfolio"
            className="p-1 px-2"
            exact
            activeStyle={{
              color: "#60A5FA",
              backgroundColor: "#F3F4F6",
            }}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/blog"
            className="p-1 px-2"
            exact
            activeStyle={{
              color: "#60A5FA",
              backgroundColor: "#F3F4F6",
            }}
          >
            Blog
          </NavLink>

          <NavLink
            to="/skill"
            className="p-1 px-2"
            exact
            activeStyle={{
              color: "#60A5FA",
              backgroundColor: "#F3F4F6",
            }}
          >
            Skill
          </NavLink>
          <NavLink
            to="/certificate"
            className="p-1 px-2"
            exact
            activeStyle={{
              color: "#60A5FA",
              backgroundColor: "#F3F4F6",
            }}
          >
            Certificate
          </NavLink>
        </div>

        <hr />

        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/skill" component={Skill} />
          <Route path="/certificate" component={Certificate} />
        </Switch>
      </div>
    </Router>
  );
}
