import React, { useEffect, useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const launch = require('../../dummydata/launches');

const useStyles = makeStyles({
  root: {
    minWidth: 275
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

export const TotalLaunches = () => {

  const [loading, setLoading] = useState(true);
  const [launches, setLaunches] = useState(0);
  const classes = useStyles();

  useEffect(() => {

    fetch("https://api.spacexdata.com/v3/launches1", {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setLaunches(data.length);
                setLoading(false);
            })
            .catch(error => {
                setLaunches(launch.launches.length);
            });
  }, [])

  return (
    <Card>
      <CardContent className={classes.root} id="launch-info-container">
        <div className="logo-launch"></div>
        <div className="launch-info-container">
          <h3>Total Launches</h3>
          <h1 id="launches">{launches}</h1>
        </div>
      </CardContent>
    </Card>
  );
}
