import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
