import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";

const rockets = require('../../dummydata/rockets');

export const FalconOne = () => {

  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(chartConf)

  useEffect(() => {

    fetch("https://api.spacexdata.com/v3/rockets/falcon1", {
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
                const updatedData = {
                  ...chartConf,
                  series: [
                    data.success_rate_pct
                  ], 
                  options: {
                    labels: [data.rocket_name]
                  }
                } 
                setChartData(updatedData)
            })
            .catch(error => {
                const updatedData = {
                  ...chartConf,
                  series: [
                    rockets.rockets.success_rate_pct
                  ], 
                  options: {
                    labels: [rockets.rockets.rocket_name]
                  }
                }
                setChartData(updatedData)
            });
  }, [])

  return (
    <div id="chart" className="falcon-one">
        <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={250} />
    </div>
  );
}

const chartConf = {

      series: [],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
          toolbar: {
            show: false
          }
        },
        title: {
          text: "Launch Success",
          align: 'left',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: true,
          style: {
            fontSize:  '18px',
            fontFamily:  "proxima_novabold",
            color:  '#263238'
          },
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
            gradientToColors: ['#CE2866'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            colorStops: [
              {
                offset: 0,
                color: "#CE2866",
                opacity: 1
              },
              {
                offset: 100,
                color: "#240F3E",
                opacity: 1
              },
            ]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [],
      },

}
