import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WhoAmI from "./pages/whoami/whoami";
import SkillsIOwn from "./pages/skillsiown/skillsiown";
import WorksIDid from "./pages/worksidid/worksidid";
import ReachMe from "./pages/reachme/reachme";
import Home from "./pages/home/home";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="/who-am-i" element={<WhoAmI />}/>
          <Route path="/skills-i-own" element={<SkillsIOwn />}/>
          <Route path="/works-i-did" element={<WorksIDid />}/>
          <Route path="/reach-me" element={<ReachMe />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
