import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import HeroNavBar from "./components/HeroNavBar";
import PersonalNotes from "./pages/PersonalNotes";
import TeamNotes from "./pages/TeamNotes";
import { Container, Navbar } from "react-bootstrap";
import DashBoard from "./pages/DashBoard";
import HealthCheckDashBoard from "./pages/HealthCheckDashBoard";
const App = () => {
  return (
    <>
      <Router>
        <HeroNavBar />
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/health" element={<HealthCheckDashBoard />}></Route>
          <Route path="/p-notes" element={<PersonalNotes />}></Route>
          <Route path="/t-notes" element={<TeamNotes />}></Route>
        </Routes>
        <Navbar fixed="bottom">
          <Container>
            <Navbar.Brand href="#">Footer</Navbar.Brand>
          </Container>
        </Navbar>
      </Router>
    </>
  );
};

export default App;
