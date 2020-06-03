import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";

const ships = require('../../dummydata/ships');

//Function to assign the needed data to arrays to use in graphs
// function getShipData(buildYear, weight, name) {

//   var shipWeight = [];
//   var shipName = [];

//   var shipData = ships;

//   for (let i = 0; i < shipData.length; i++) {

//     shipWeight.push(shipData[i].weight_kg);
//     shipName.push(shipData[i].ship_name);

//   }

//   return [shipWeight, shipName];

// }

//Getting access to the arrays within the getShipData() function
// const [shipWeight, shipName] = getShipData();

export const ColumnChart = () => {

  const [chartData, setChartData] = useState(chartConf)

  useEffect(() => {

    fetch("https://api.spacexdata.com/v3/shipsa", {
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
                    data: data.map(ship => ship.weight_kg)
                  }],
                  options: {
                    xaxis: {
                      categories: data.map(ship => ship.ship_name),
                      labels: {
                        style: {
                          fontSize: '12px'
                        },
                      }
                    }
                  }
                }
                
                setChartData(updatedData)
                // setLaunchesShips(data);
                // setLoading(false);
            })
            .catch(error => {
                console.log(`Fetch Failed ${error}`);
                const updatedData = {
                  ...chartConf,
                  series: [{
                    data: ships.capsules.map(ship => ship.weight_kg)
                  }],
                  options: {
                    xaxis: {
                      categories: ships.capsules.map(ship => ship.ship_name),
                      labels: {
                        style: {
                          fontSize: '12px'
                        },
                      }
                    }
                  }
                }
                
                setChartData(updatedData)
            });

    

  }, [])

  return (
      <div id="chart" className="">
          <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={450} />
      </div>
  );
}

// export default ColumnChart;

const chartConf = {
    
  series: [{
    data: []//shipWeight
  }],
  options: {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
      },
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [],//shipName,
      labels: {
        style: {
          fontSize: '12px'
        },
      }
    },
    yaxis: {
      title: {
        text: 'Weight (kg)'
      },
    },
    fill: {
      colors: ['#CE2866', '#240F3E']
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          legend: {
            position: "bottom"
          },
          xaxis: {
            labels: {
              style: {
                fontSize: '12px'
              },
              show: false,
            }
          },
          yaxis: {
            title: {
              text: 'Weight (kg)'
            },
            show: false,
          },
          title: {
            text: "All Ships Weights(kg)",
            align: 'center',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '20px',
              fontWeight:  'bold',
              fontFamily:  "proxima_novaregular",
              color:  '#263238'
            },
          },
        }
      }
    ]

  },


};