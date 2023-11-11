import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import HeroNavBar from "./components/HeroNavBar";
import PersonalNotes from "./pages/PersonalNotes";
import TeamNotes from "./pages/TeamNotes";
import { Navbar } from "react-bootstrap";
import config from "./config.json";

import HealthCheckDashBoard from "./pages/HealthCheckDashBoard";
const App = () => {
  return (
    <>
      <HeroNavBar />

      <Router>
        <Routes>
          <Route path="/" element={<HealthCheckDashBoard />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/health" element={<HealthCheckDashBoard />}></Route>
          <Route path="/p-notes" element={<PersonalNotes />}></Route>
          <Route path="/t-notes" element={<TeamNotes />}></Route>
        </Routes>
        <Navbar fixed="bottom">
          <div className="footer">
            <div className="footer__left">
              Copyright © 2023 Jessish Pothancheri.|
            </div>
            <div className="footer__right">
              {" "}
              Connecting to {config.app.healthcheck.healthcheckRestEndpoint}
            </div>
          </div>
        </Navbar>
      </Router>
    </>
  );
};

export default App;
