import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Epidemics from './components/Epidemics';
import Timeline from './components/Timeline';
import Resources from './components/Resources';
import Opioids from './components/Opioids';
import CrackCocaine from './components/CrackCocaine';
import Methamphetamine from './components/Methamphetamine';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/epidemics" exact component={Epidemics} />
        <Route path="/epidemics/opioids" component={Opioids} />
        <Route path="/epidemics/crack-cocaine" component={CrackCocaine} />
        <Route path="/epidemics/methamphetamine" component={Methamphetamine} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/resources" component={Resources} />
      </Routes>
    </Router>
  );
}

export default App;
