import React, {useState, useEffect} from 'react';

export const Ships = () => {
    const [loading, setLoading] = useState(true);
    const [launchesShips, setLaunchesShips] = useState([]);

    useEffect(() => {

        fetch("https://api.spacexdata.com/v3/ships")
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setLaunchesShips(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(`Fetch Failed ${err}`);
            });
    }, []);
    

    return (
        <div style={
            {textAlign: "center"}
            }>

            <h1>Ship Launches</h1>
            {loading ? "Loading..." : ""}
            {launchesShips.length > 0 ? (
                <ListLaunches launchesShips={launchesShips} />
            ) : (
                "There are no ship Launches available"
            )}

        </div>
    );
    
};

const ListLaunches = ({ launchesShips }) => {
    
    return (
        <ul>
            {launchesShips.map(launchesShips => {
                return <li>{launchesShips.year_built}</li>
            })}
        </ul>
    )
}