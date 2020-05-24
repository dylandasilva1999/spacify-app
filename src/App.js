import React from 'react';
import './App.css';

import './components/NavBar'
//import './components/LaunchShips'
//import { Launches } from './components/LaunchShips'
import ClippedDrawer from './components/NavBar';
import ColumnChart from './components/charts/ShipsGraph';
import BarChart from './components/charts/LandpadsGraph';
import TotalLaunches from './components/charts/TotalLaunchesCard';
import TotalMissions from './components/charts/TotalMissionsCard';
import FalconOne from './components/charts/LaunchSuccessRateLeft';
import FalconNine from './components/charts/LaunchSuccessRateMiddle';
import FalconHeavy from './components/charts/LaunchSuccessRateRight';

function App() {
  return (
    <div className ="App">

      <ClippedDrawer position = 'fixed'>

      </ClippedDrawer>

      <div className = "padding-app-drawer"></div>

      <div className = "container-fluid top">
        <div className = "row">
          <div className = "Ships col-xl-8">
            <ColumnChart />
          </div>
          <div className = "right-side col-xl-4">
            <div className = "card-one col-xl-6">
              <TotalLaunches />
            </div>
            <div className = "card-two col-xl-6">
              <TotalMissions />
            </div>
            <div className = "success-rate-container col-xl-12">
              <div className = "row">
                <div className = "left col-xl-4">
                  <FalconOne />
                </div>
                <div className = "middle col-xl-4">
                  <FalconNine />
                </div>
                <div className = "right col-xl-4">
                  <FalconHeavy />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className = "container-fluid middle-container">
        <div className = "row">
          <div className = "left-middle col-xl-6">
            <BarChart />
          </div>

          <div className = "right-middle col-xl-6"></div>

        </div>
      </div>
    </div>
  );
}

export default App;
