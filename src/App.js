import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import About from './components/about/About'
import Profile from './views/Profile'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
