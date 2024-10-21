import { useState, useEffect } from "react";

const useFetchQuests = () => {
    // Initialize state variables for loading and quest data
    const [isLoadingQuests, setIsLoadingQuests] = useState(true);
    const [quests, setQuests] = useState([]);

    // Run once on mount
    useEffect(() => {
        const fetchQuests = async () => {
            try {
                // Fetch quest data from the server and set quest state
                const response = await fetch('http://localhost:5000/api/quests/get-quests', {
                    method: 'GET',
                    credentials: 'include',
                });
                const data = await response.json();
                setQuests(data); 
            } catch (error) {
                // Log error
                console.log(error);
            } finally {
                // Set loading state to false
                setIsLoadingQuests(false); 
            }
        }

        fetchQuests();
    }, []);

    // Return loading and quest state to the quest page
    return {isLoadingQuests, quests};
}

export default useFetchQuests