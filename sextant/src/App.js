import './App.css';
import { Routes, Route, NavLink} from 'react-router-dom';

import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';


function App() {
  return (
    <>
      <nav className="nav-container">
        <span className="nav-title">Sextant</span>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/page1">Page 1</NavLink>
          </li>
          <li>
            <NavLink to="/page2">Page 2</NavLink>
          </li>
          <li>
            <NavLink to="/page3">Page 3</NavLink>
          </li>
        </ul>
      </nav>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/page1" element={<Page1/>}/>
          <Route path="/page2" element={<Page2/>}/>
          <Route path="/page3" element={<Page3/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
