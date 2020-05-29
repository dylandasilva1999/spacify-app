import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const launches = require('../../dummydata/launches');

//Function to get total launches
function getTotalLaunches() {

  var totalLaunches = launches.launches.length;

  return totalLaunches;

}

//Getting access to totalLaunches variable in getTotalLaunches()
let totalLaunches = getTotalLaunches();

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

export default function TotalLaunches() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className="logo-launch"></div>
        <div className="launch-info-container">
          <h3>Total Launches</h3>
          <h1>{totalLaunches}</h1>
        </div>
      </CardContent>
    </Card>
  );
}
