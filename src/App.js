import React from 'react';
import './App.css';

import './components/NavBar'
//import './components/LaunchShips'
//import { Launches } from './components/LaunchShips'
import ResponsiveDrawer from './components/NavBar';
import ColumnChart from './components/charts/ShipsGraph';
import BarChart from './components/charts/LandpadsGraph';
import TotalLaunches from './components/charts/TotalLaunchesCard';
import TotalMissions from './components/charts/TotalMissionsCard';
import FalconOne from './components/charts/LaunchSuccessRateLeft';
import FalconNine from './components/charts/LaunchSuccessRateMiddle';
import FalconHeavy from './components/charts/LaunchSuccessRateRight';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className ="App">

      <ResponsiveDrawer position = 'fixed'></ResponsiveDrawer>

      <div className = "padding-app-drawer"></div>

      <main>

        <Grid container spacing={1}>

            <Grid item xs={8}>

              <ColumnChart />
              
            </Grid>

            <Grid item xs={4}>

              <Grid container spacing={2}>

              <Grid item xs={2} />

                <Grid item xs={4}>

                  <TotalLaunches />

                </Grid>

                <Grid item xs={1} />

                <Grid item xs={4}>

                  <TotalMissions />

                </Grid>

              </Grid>

              <Grid container spacing={2}>

                <Grid item xs={2} xl={2}/>

                  <Grid item xs={3} xl={3}>

                    <FalconOne />

                  </Grid>

                  <Grid item xs={3} xl={3}>

                    <FalconNine />

                  </Grid>

                  <Grid item xs={3} xl={3}>

                    <FalconHeavy />

                  </Grid>

              </Grid>  

            </Grid>

        </Grid>

        <div className = "container-fluid middle-container">

          <div className = "row">

            <div className = "left-middle col-xl-6">

              <BarChart />

            </div>

            <div className = "right-middle col-xl-6"></div>

          </div>

        </div>

      </main>

    </div>

    
  );
}

export default App;
