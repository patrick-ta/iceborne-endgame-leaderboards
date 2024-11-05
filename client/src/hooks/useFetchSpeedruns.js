import { useState, useEffect } from "react";

const useFetchSpeedruns = (questNameParam) => {
    // Initialize state variables for loading and speedrun data
    const [isLoadingSpeedruns, setIsLoadingSpeedruns] = useState(true);
    const [speedruns, setSpeedruns] = useState([]);

    // Function to convert time property to milliseconds for sorting
    function convertTimeToMilliseconds(time) {
        // Splits the string format M'SS"MS into three variables
        let [minutes, rest] = time.split("'");
        let [seconds, milliseconds] = rest.split('"');

        // Convert strings to numbers
        minutes = parseInt(minutes);
        seconds = parseInt(seconds);
        milliseconds = parseInt(milliseconds);

        // Calculate total milliseconds and return it
        const totalMilliseconds = (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;
        return totalMilliseconds;
    }

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
                // Get response from server and sort it in ascending order based off time property
                // This means the fastest speedruns will appear at the top
                const data = await response.json();
                const sortedData = [...data].sort((a, b) => {
                    const timeA = convertTimeToMilliseconds(a.time);
                    const timeB = convertTimeToMilliseconds(b.time);
                    return timeA - timeB;
                });
                setSpeedruns(sortedData);
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