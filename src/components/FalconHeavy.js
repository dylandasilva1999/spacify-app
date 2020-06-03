import React, {useState, useEffect} from 'react';
//import ReactApexChart from "react-apexcharts";
//import ColumnChart from './charts/ShipsGraph';

export const LandPads = () => {
    const [loading, setLoading] = useState(true);
    const [falconHeavy, setFalconHeavy] = useState([]);

    useEffect(() => {

        fetch("https://api.spacexdata.com/v3/rockets/falconheavy", {
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
                setFalconHeavy(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(`Fetch Failed ${error}`);
            });
    }, []);
    

    return (
        <div> 


        </div>
    
    )};


    

