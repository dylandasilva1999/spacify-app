export const Launches = () => {
    const [loading, setLoading] = useState(true);
    const [launchesShips, setLaunchesShips] = useState([]);

    useEffect(() => {

        console.log("The Launches of the ships are being rendered");
        fetch("https://api.spacexdata.com/v3/launches")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setLaunchesShips(data);
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