import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const missions = require('../../dummydata/missions');

//Function to get total launches
function getTotalMissions() {

  var totalMissions = missions.missions.length;

  return totalMissions;

}

//Getting access to totalLaunches variable in getTotalLaunches()
let totalMissions = getTotalMissions();

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TotalMissions() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className="logo-missions"></div>
        <div className="mission-info-container">
          <h3>Total Missions</h3>
          <h1>{totalMissions}</h1>
        </div>
      </CardContent>
    </Card>
  );
}
