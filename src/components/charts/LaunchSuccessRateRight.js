import React from 'react';
import ReactApexChart from "react-apexcharts";

const rockets = require('../../dummydata/rockets');

//Function to assign the needed data to arrays to use in graphs
function getRocketSuccessRate() {

  var falconHeavySuccessRates = [];

  var rocketNameThree = "";

  var rocketData = rockets.rockets;

  for (let i = 0; i < rocketData.length; i++) {

    if (rocketData[i].rocket_name === "Falcon Heavy") {

      falconHeavySuccessRates.push(rocketData[i].success_rate_pct);
      rocketNameThree = rocketData[i].rocket_name;
      
    } else {

      //console.log("Rocket data does not exist");

    }

  }

  return [falconHeavySuccessRates, rocketNameThree];

}

//Getting access to the arrays within the getShipData() function
const [falconHeavySuccessRates, rocketNameThree] = getRocketSuccessRate();

class FalconHeavy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: falconHeavySuccessRates,
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
        
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                formatter: function(val) {
                  return parseInt(val);
                },
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [rocketNameThree],
      },
    
    
    };
  }

    render() {
        return (
            <div id="chart" className="">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={250} />
            </div>
        );

    }
}

export default FalconHeavy;
