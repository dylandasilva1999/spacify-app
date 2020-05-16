import React, { useState, useEffect } from 'react';
import ReactApexChart from "react-apexcharts";

export const Launches = () => {
    const [loading, setLoading] = useState(true);
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        console.log("This launches are being rendered");
        fetch("https://api.spacexdata.com/v3/launches")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setLaunches(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(`There was an error ${err}`);
            });
    }, []);

    return (
        <div style={
            {textAlign: "center"}
            }>

            <h1>Launches</h1>
            {loading ? "Loading..." : ""}
            {launches.length > 0 ? (
                <ListLaunches launches={launches} />
            ) : (
                "There are no launches available"
            )}

        </div>
            
    );
    
};

const ListLaunches = ({ launches }) => {
    return (
        <ul>
            {launches.map((launch, index) => {
                return <li key={index}>{launch.launch_year}</li>;
            })}
        </ul>
    );
};

class BarChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        },],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
        },
      
      
      };
    }

    render() {
        return (
            <div id="chart" className="container col-xl-6">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={450} />
            </div>
        );

    }
}

export default BarChart;
