import React from 'react';
import './App.css';

import './components/NavBar'
//import './components/LaunchShips'
//import { Launches } from './components/LaunchShips'
import ClippedDrawer from './components/NavBar';
import BarChart from './components/LaunchShips';

function App() {
  return (
    <div className ="App">

      <ClippedDrawer position = 'fixed'>

      </ClippedDrawer>

      <div className = "padding-app-drawer"></div>

      <div className = "Launches">
        <BarChart />
      </div>

    </div>
  );
}

export default App;
