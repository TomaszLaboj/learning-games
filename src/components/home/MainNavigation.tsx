import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/math-quiz" end>
              Math Quiz
            </NavLink>
          </li>
          <li>
            <NavLink to="/capitals-quiz">Geography Quiz - Capitals</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
