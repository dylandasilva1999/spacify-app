import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

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

export const News = () => {

    const classes = useStyles();

    return (
        <Card>
          <CardContent className={classes.root} id="launch-info-container">
            <div className="news-container">
              <h3 id="news">News</h3>
              <div className="news-paragraph-container">
                <p id="news-paragraph">
                    New Starlink Mission!
                </p>
                <p id="information-paragraph">
                    News on all SpaceX missions can be found 
                    by following and clicking on the button below.
                    Which will redirect you to their website.
                </p>
              </div>
              <div id="button-container">
                    <a href="https://www.spacex.com/launches/"><button class="learn-more">Learn More</button></a>
              </div>
              <div className="news-illustration"></div>
            </div>
          </CardContent>
        </Card>
      );

}