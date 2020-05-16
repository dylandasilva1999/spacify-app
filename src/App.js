import React from 'react';
import './App.css';

import './components/TopBar'
//import './components/LaunchShips'
//import { Launches } from './components/LaunchShips'
import MiniDrawer from './components/TopBar';
import BarChart from './components/LaunchShips';

function App() {
  return (
    <div className ="App">

      <MiniDrawer position = 'fixed'>

      </MiniDrawer>

      <div className = "padding-app-drawer"></div>

      <div className = "Launches">
        <BarChart />
      </div>

    </div>
  );
}

export default App;
