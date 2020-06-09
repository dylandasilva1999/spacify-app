import React, { useEffect, useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const mission = require('../../dummydata/missions');

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

export const TotalMissions = () => {

  const [loading, setLoading] = useState(true);
  const [missions, setMissions] = useState(0);
  const classes = useStyles();

  useEffect(() => {

    fetch("https://api.spacexdata.com/v3/missions", {
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
                setMissions(data.length);
                setLoading(false);
            })
            .catch(error => {
                setMissions(mission.missions.length);
            });
  }, [])

  return (
    <Card>
      <CardContent className={classes.root} id="launch-info-container">
        <div className="logo-missions"></div>
        <div className="mission-info-container">
          <h3>Total Missions</h3>
          <h1 id="missions">{missions}</h1>
        </div>
      </CardContent>
  </Card>
  );
}
