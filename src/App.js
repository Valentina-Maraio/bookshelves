import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import About from './components/about/About'
import Profile from './views/Profile'
import Explore from './views/Explore'
import SignIn from './registration/SignIn'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/explore" element={<Explore/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
