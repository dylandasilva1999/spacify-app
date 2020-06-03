import React from 'react';
import ReactApexChart from "react-apexcharts";

const landpads = require('../../dummydata/landpads');

//Function to assign the needed data to arrays to use in graphs
function getLandPadData() {

  //sl = successful landings
  //al = attempted landings

  //For landing pad 1
  var slPadOne = 0;
  var alPadOne = 0;
  var successRatePadOne = 0;

  //For landing pad 2
  var slPadTwo = 0;
  var alPadTwo = 0;
  var successRatePadTwo = 0;
  
  //For landing pad 3
  var slPadThree = 0;
  var alPadThree  = 0;
  var successRatePadThree = 0;

  //For landing pad 4
  var slPadFour= 0;
  var alPadFour = 0;
  var successRatePadFour = 0;

  //For landing pad 5
  var slPadFive = 0;
  var alPadFive = 0;
  var successRatePadFive = 0;

  //For landing pad 6
  var slPadSix = 0;
  var alPadSix = 0;
  var successRatePadSix = 0;

  //For landing pad 7
  var slPadSeven = 0;
  var alPadSeven = 0;
  var successRatePadSeven = 0;

  var landPadName = [];

  var landpadData = landpads.landpads;

  for (let i = 0; i < landpadData.length; i++) {

    landPadName.push(landpadData[i].full_name);

    if(landpadData[i].full_name === "Landing Zone 1") {

      slPadOne = landpadData[i].successful_landings;
      alPadOne = landpadData[i].attempted_landings;
      successRatePadOne = slPadOne/alPadOne * 100;
      
    } else if (landpadData[i].full_name === "Landing Zone 2") {

      slPadTwo = landpadData[i].successful_landings;
      alPadTwo = landpadData[i].attempted_landings;
      successRatePadTwo = slPadTwo/alPadTwo * 100;

    } else if (landpadData[i].full_name === "Landing Zone 4") {

      slPadThree = landpadData[i].successful_landings;
      alPadThree = landpadData[i].attempted_landings;
      successRatePadThree = slPadThree/alPadThree * 100;
      
    } else if (landpadData[i].full_name === "Of Course I Still Love You") {

      slPadFour = landpadData[i].successful_landings;
      alPadFour = landpadData[i].attempted_landings;
      successRatePadFour = slPadFour/alPadFour * 100;
      
    } else if (landpadData[i].full_name === "Just Read The Instructions V1") {

      slPadFive = landpadData[i].successful_landings;
      alPadFive = landpadData[i].attempted_landings;
      successRatePadFive = slPadFive/alPadFive * 100;
      
    } else if (landpadData[i].full_name === "Just Read The Instructions") {

      slPadSix = landpadData[i].successful_landings;
      alPadSix = landpadData[i].attempted_landings;
      successRatePadSix = slPadSix/alPadSix * 100;
      
    } else if (landpadData[i].full_name === "A Shortfall of Gravitas") {

      slPadSeven = landpadData[i].successful_landings;
      alPadSeven = landpadData[i].attempted_landings;
      successRatePadSeven = slPadSeven/alPadSeven * 100;
      
    } else {

      console.log("No landpad data available")

    }

  }

  return [landPadName, successRatePadOne, successRatePadTwo, successRatePadThree, successRatePadFour, 
    successRatePadFive, successRatePadSix, successRatePadSeven];

}

//Getting access to the arrays within the getShipData() functio
const [landPadName, successRatePadOne, successRatePadTwo, successRatePadThree, successRatePadFour, 
  successRatePadFive, successRatePadSix, successRatePadSeven] = getLandPadData();

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        data: [successRatePadOne, successRatePadTwo, successRatePadThree, successRatePadFour, 
          successRatePadFive, successRatePadSix, successRatePadSeven]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [landPadName[0], landPadName[1], landPadName[2], landPadName[3], landPadName[4],
          landPadName[5], landPadName[6]]
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
                text: "Landing Pads Success Rates",
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
    
    
    };
  }

  render() {
    return (
        <div id="chart" className="">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={450} />
        </div>
    );

  }
}

export default BarChart;
