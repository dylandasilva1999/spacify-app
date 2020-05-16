import React, { useState, useEffect } from 'react';

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