import React from 'react';
import './App.css';

import './components/TopBar'
//import './components/LaunchShips'
//import { Launches } from './components/LaunchShips'
import MiniDrawer from './components/TopBar';

function App() {
  return (
    <div className ="App">

      <MiniDrawer position = 'fixed'>

      </MiniDrawer>

      <div className = "Launches">
        <Launches />
      </div>

    </div>
  );
}

export default App;
