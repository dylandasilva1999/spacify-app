import React, { useEffect, useState } from 'react';
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
  const [cardData, setCardData] = useState([]);
  const classes = useStyles();

  useEffect(() => {

    fetch("https://api.spacexdata.com/v3/launches", {
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
                //console.log(data);
                

                setCardData(data)
                setLoading(false);
            })
            .catch(error => {
                console.log(`Fetch Failed ${error}`);
      
                
                //setCardData(data)
                setLoading(false);
            });
  }, [])

  return (
    <Card>
      <CardContent className={classes.root} id="launch-info-container">
        <div className="logo-launch"></div>
        <div className="launch-info-container">
          <h3>Total Launches</h3>
          <h1 id="launches">{totalLaunches}</h1>
        </div>
      </CardContent>
  </Card>
  );
}
