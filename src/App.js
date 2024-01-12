import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { AboutUs, Chef, Findus, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, FullMenu } from './container';
import { Navbar } from './components';
import './App.css';

// const App = () => (
//   <Router>
//   <div>
//     <Navbar />
//     <Header />
//     <AboutUs />
//     {/* <SpecialMenu /> */}
//     <Route path="/SpecialMenu" exact component={SpecialMenu} />
//     <Chef />
//     <Intro />
//     <Laurels />
//     <Gallery />
//     <Findus />
//     <Footer />
//     <Route path="/full-menu" exact component={FullMenu} />
//   </div>
//   </Router>
// );

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Routes>
        <Route path="/" element={<SpecialMenu />} />
        <Route path="/full-menu" element={<FullMenu />} />
      </Routes>
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />
    </div>
  </Router>
);

export default App;
