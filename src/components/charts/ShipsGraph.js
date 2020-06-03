import React from 'react';
import ReactApexChart from "react-apexcharts";

const ships = require('../../dummydata/ships');

//Function to assign the needed data to arrays to use in graphs
function getShipData(buildYear, weight, name) {

  var shipWeight = [];
  var shipName = [];

  var shipData = ships.capsules;

  for (let i = 0; i < shipData.length; i++) {

    shipWeight.push(shipData[i].weight_kg);
    shipName.push(shipData[i].ship_name);

  }

  return [shipWeight, shipName];

}

//Getting access to the arrays within the getShipData() function
const [shipWeight, shipName] = getShipData();

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
