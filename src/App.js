import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Epidemics from './components/Epidemics';
import Opioids from './components/Opioids';
import CrackCocaine from './components/CrackCocaine';
import Methamphetamine from './components/Methamphetamine';
import Timeline from './components/Timeline';
import Resources from './components/Resources';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/epidemics" element={<Epidemics />}>
          <Route path="opioids" element={<Opioids />} />
          <Route path="crack-cocaine" element={<CrackCocaine />} />
          <Route path="methamphetamine" element={<Methamphetamine />} />
        </Route>
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
