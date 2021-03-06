import React from 'react';
import './App.css';

import './components/layout/NavBar'
import ResponsiveDrawer from './components/layout/NavBar';
import {ColumnChart} from './components/charts/ShipsGraph';
import {BarChart} from './components/charts/LandPadsGraph';
import {TotalLaunches} from './components/charts/TotalLaunchesCard';
import {TotalMissions} from './components/charts/TotalMissionsCard';
import {FalconOne} from './components/charts/LaunchSuccessRateLeft';
import {FalconNine} from './components/charts/LaunchSuccessRateMiddle';
import {FalconHeavy} from './components/charts/LaunchSuccessRateRight';
import {News} from './components/news/News';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className ="App">

      <ResponsiveDrawer position = 'fixed'></ResponsiveDrawer>

      <div className = "padding-app-drawer">

        <div className = "top-bar">

            <div className = "icon"></div>
            <h1>Greetings Spacifier!</h1>
            <div className = "illustration"></div>

        </div>

      </div>

      <main>

      <Container maxWidth="xl" className="graphs-container">
        <Grid container spacing={1}>

            <Grid item xs={12} xl={7} className="column-chart">

              <ColumnChart />
              
            </Grid>

            <Grid item xs={2} sm={12} xl={1} />

            <Grid item xs={12} sm={12} xl={4}>

              <Grid container spacing={2}>

              <Grid item xs={2} sm={12} xl={12} />

                <Grid item xs={12} sm={5} xl={5}>

                  <TotalLaunches />

                </Grid>

                <Grid item xs={1} sm={0} xl={2} />

                <Grid item xs={12} sm={5} xl={5}>

                  <TotalMissions />

                </Grid>

              </Grid>

              <Grid container spacing={1}>

                <Grid item xs={2} sm={12} xl={12}/>

                  <Grid item xs={12} sm={4} xl={4}>

                    <FalconOne />

                  </Grid>

                  <Grid item xs={12} sm={4} xl={4}>

                    <FalconNine />

                  </Grid>

                  <Grid item xs={12} sm={4} xl={4}>

                    <FalconHeavy />

                  </Grid>

              </Grid>  

            </Grid>

        </Grid>

        <Grid container spacing={3}>

          <Grid item xs={12} xl={5}>

            <BarChart />

          </Grid>

          <Grid item xs={2} xl={1}/>

          <Grid item xs={12} xl={6}>

            <News />

          </Grid>

        </Grid>

      </Container>  

      </main>

    </div>
    
  );
}

export default App;
