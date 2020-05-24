import React, { useState, useEffect } from 'react';
import ReactApexChart from "react-apexcharts";

const ships = require('../../dummydata/ships');

//Function to assign the needed data to arrays to use in graphs
function getShipData(buildYear, weight, name) {

  var yearBuilt = [];
  var shipWeight = [];
  var shipName = [];

  var shipData = ships.capsules;

  for (let i = 0; i < shipData.length; i++) {

    yearBuilt.push(shipData[i].year_built);
    shipWeight.push(shipData[i].weight_kg);
    shipName.push(shipData[i].ship_name);

  }

  return [yearBuilt, shipWeight, shipName];

}

//Getting access to the arrays within the getShipData() function
let shipFilterData = getShipData();
const [yearBuilt, shipWeight, shipName] = getShipData();

class ColumnChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        data: shipWeight
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
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
          categories: [
            shipName[0],
            shipName[1],
            shipName[2],
            shipName[3],
            shipName[4],
            shipName[5],
            shipName[6],
            shipName[7],
            shipName[8],
            shipName[9],
            shipName[10],
            shipName[11],
            shipName[12],
            shipName[13],
            shipName[14],
            shipName[15],
            shipName[16],
            shipName[17],
            shipName[18],
            shipName[19],
            shipName[20],
            shipName[21],
          ],
          labels: {
            style: {
              fontSize: '12px'
            }
          }
        },
        yaxis: {
          title: {
            text: 'Weight (kg)'
          }
        }

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

export default ColumnChart;
