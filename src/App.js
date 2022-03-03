import './App.css';
import Home from './pages/Home';
import Search from './components/Search';
import SearchPage from './pages/SearchPage';
import About from "./pages/AboutPage";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/about" element={<About />} />
          <Route path = "*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
