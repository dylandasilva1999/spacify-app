import React, {useState, useEffect} from 'react';
//import ReactApexChart from "react-apexcharts";
import '../components/Ships'
//import ColumnChart from './charts/ShipsGraph';

export const Ships = () => {
    const [loading, setLoading] = useState(true);
    const [launchesShips, setLaunchesShips] = useState([]);

    useEffect(() => {

        fetch("https://api.spacexdata.com/v3/ships", {
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
                //console.log(data);
                setLaunchesShips(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(`Fetch Failed ${error}`);
            });
    }, []);
    

    return (
        <div style={
            {textAlign: "center"}
            }>

            <h1>Ship Launches</h1>
            {loading ? "Loading..." : ""}
            {launchesShips.length > 0 ? (
                <GetShipData launchesShips={launchesShips} />
            ) : (
                "There are no ship Launches available"
            )}

        </div>
    );
    
};

const GetShipData = function ({launchesShips}) {

    let shipWeights = [];
    let shipNames = [];
    let yearBuilt = [];

    for (let i = 0; i < launchesShips.length; i++) {
        shipWeights.push(launchesShips[i].weight_kg);
        shipNames.push(launchesShips[i].ship_name);
        yearBuilt.push(launchesShips[i].year_built);
    }

    return [shipWeights, shipNames, yearBuilt];

}


