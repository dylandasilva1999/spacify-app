import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

//import Container from '@material-ui/core/Container';
//import Grid from '@material-ui/core/Grid';

export const Users = () => {

  const [users, setUsers] = useState(chartConf)
  
  useEffect(() => {
  
    fetch("http://localhost:3000/users", {
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
                console.log(data);
                const updatedData = {
                  ...chartConf,
                  series: [{
                    data: data.map(landpad => landpad.attempted_landings)
                  }],
                  options: {
                    xaxis: {
                      categories: data.map(landpad => landpad.full_name),
                    },
                    plotOptions: {
                      bar: {
                        horizontal: true,
                      }
                    },
                    dataLabels: {
                      enabled: false
                    },
                  }
                }
                  
                setChartData(updatedData)
                //setLoading(false);
              })
              .catch(error => {
                  console.log(`Fetch Failed ${error}`);
                  const updatedData = {
                    ...chartConf,
                    series: [{
                      data: landpads.landpads.map(landpad => landpad.attempted_landings)
                    }, {
                      data: landpads.landpads.map(landpad => landpad.successful_landings)
                    }],
                    options: {
                      xaxis: {
                        categories: landpads.landpads.map(landpad => landpad.full_name),
                      },
                      plotOptions: {
                        bar: {
                          horizontal: true,
                        }
                      },
                      dataLabels: {
                        enabled: false
                      },
                    }
                  }
                  
                  setChartData(updatedData)
              });
    }, [])

    return (
        <div id="chart" className="landpad-graph">
            <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={470} />
        </div>
    );
}

