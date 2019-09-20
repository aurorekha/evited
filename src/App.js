import React from 'react';
import TopBanner from './components/TopBanner/topBanner.js';
import WhatWeDo from './components/WhatWeDo/whatWeDo.js';
import HowDoWeDo from './components/HowDoWeDo/howDoWeDo.js';
import Examples from './components/Examples/examples.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <WhatWeDo />
      <HowDoWeDo />
      <Examples />
    </div>
  );
}

export default App;
