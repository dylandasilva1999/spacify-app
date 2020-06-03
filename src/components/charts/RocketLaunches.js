import React from 'react';
import ReactApexChart from "react-apexcharts";

const rockets = require('../../dummydata/rockets');

//Function to assign the needed data to arrays to use in graphs
function getRocketSuccessRate() {

  var falconOneSuccessRates = [];
  var falconNineSuccessRates = [];
  var falconHeavySuccessRates = [];

  var rocketNameOne = "";
  var rocketNameTwo = "";
  var rocketNameThree = "";

  var rocketData = rockets.rockets;

  for (let i = 0; i < rocketData.length; i++) {

    if(rocketData[i].rocket_name === "Falcon 1") {

      falconOneSuccessRates.push(rocketData[i].success_rate_pct);
      rocketNameOne = rocketData[i].rocket_name;
      
    } else if (rocketData[i].rocket_name === "Falcon 9") {

      falconNineSuccessRates.push(rocketData[i].success_rate_pct);
      rocketNameTwo = rocketData[i].rocket_name;

    } else if (rocketData[i].rocket_name === "Falcon Heavy") {

      falconHeavySuccessRates.push(rocketData[i].success_rate_pct);
      rocketNameThree = rocketData[i].rocket_name;
      
    } else {

      //console.log("Rocket data does not exist");

    }

  }

  return [falconOneSuccessRates, falconNineSuccessRates, falconHeavySuccessRates, rocketNameOne, rocketNameTwo, rocketNameThree];

}

//Getting access to the arrays within the getShipData() function
const [falconOneSuccessRates, falconNineSuccessRates, falconHeavySuccessRates, rocketNameOne, rocketNameTwo, rocketNameThree] = getRocketSuccessRate();

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
          name: rocketNameOne,
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: rocketNameTwo,
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: rocketNameThree,
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [5, 7, 5],
          curve: 'smooth',
          dashArray: [0, 8, 5],
          colors: ['#CE2866', '#CE2866', '#CE2866'],
        },
        title: {
          text: '',
          align: 'left'
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (mins)"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " per session"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: '#f1f1f1',
        }
      },
    
    
    };
  }

  render() {
    return (
        <div id="chart" className="">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={450} />
        </div>
    );

  }
}

export default LineChart;
