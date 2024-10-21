import { useState, useEffect } from "react";

const useFetchSpeedruns = (questNameParam) => {
    // Initialize state variables for loading and speedrun data
    const [isLoadingSpeedruns, setIsLoadingSpeedruns] = useState(true);
    const [speedruns, setSpeedruns] = useState([]);

    // Run once on mount
    useEffect(() => {
        const fetchSpeedruns = async () => {
            // Send quest url parameter, fetch quest data from the server and set speedrun state
            try {
                const response = await fetch('http://localhost:5000/api/speedruns/get-speedruns', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({questNameParam}),
                });
                const data = await response.json();
                console.log(data);
                setSpeedruns(data);
            } catch (error) {
                // Log error
                console.log(error);
            } finally {
                // Set loading state to false
                setIsLoadingSpeedruns(false);
            }
        }

        fetchSpeedruns();
    }, []);

    // Return loading and speedrun state to the speedrun leaderboard page
    return { isLoadingSpeedruns, speedruns };
}

export default useFetchSpeedruns