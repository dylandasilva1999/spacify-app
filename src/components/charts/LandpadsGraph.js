import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";

const landpads = require('../../dummydata/landpads');

export const BarChart = () => {

  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(chartConf)
  
  useEffect(() => {
  
    fetch("https://api.spacexdata.com/v3/landpadsa", {
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

const chartConf = {

  series: [{
    name: "Attempted",
    data: []
  }, {
    name: "Successful",
    data: []
  }],
  options: {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    colors: ['#CE2866', '#240F3E'],
    title: {
      text: "Landing Pads Attempted vs Successful Landings",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '22px',
        fontFamily:  "proxima_novabold",
        color:  '#263238'
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      },
      colors: ['#CE2866', '#240F3E']
    },
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    legend: {
      
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['#fff']
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: []
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
              horizontal: true
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
            show: false,
          },
          title: {
            text: "Attempted vs Successful Landings",
            align: 'center',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '20px',
              fontWeight:  'bold',
              fontFamily: "proxima_novaregular",
              color:  '#263238'
            },
        },
        }
      }
    ],
  },

}
