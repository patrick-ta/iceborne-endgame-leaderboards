import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import './LeaderboardPage.css'

import useFetchSpeedruns from "../../hooks/useFetchSpeedruns";

const LeaderboardPage = () => {
    // Get the url parameter
    const { questNameParam } = useParams();
    // Invoke useFetchSpeedruns to get loading state and speedruns
    const { isLoadingSpeedruns, speedruns } = useFetchSpeedruns(questNameParam);

    // Function to convert the url parameter to title case
    function convertToTitleCase(questNameParam) {
        const str = questNameParam.replace(/-/g, ' ');

        const exceptions = ['of', 'the', 'are'];

        return str.toLowerCase().split(' ').map((word, i) => {
            return exceptions.includes(word) && i != 0 ? word : word.charAt(0).toUpperCase().concat(word.substr(1));
        }).join(' ');
    }

    // If the speedruns are still loading, return loading text
    if (isLoadingSpeedruns) {
        return <div>Loading...</div>;
    }
    // Otherwise display leaderboard
    return (
        <>
        <main className='left-margin'>
            <h1>{convertToTitleCase(questNameParam)}</h1>
        
            <table>
                <thead>
                    <tr>
                        <th>Runner</th>
                        <th>Time</th>
                        <th>Weapon</th>
                        <th>Quest</th>
                        <th>Ruleset</th>
                    </tr>
                </thead>

                <tbody>
                    {speedruns.map((speedrun, index) => (
                        <tr key={index}>
                            <td>{speedrun.runner}</td>
                            <td>
                                <a 
                                    href={speedrun.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    {speedrun.time}
                                </a>
                            </td>
                            <td>{speedrun.weapon}</td>
                            <td>{speedrun.quest_name}</td>
                            <td>{speedrun.ruleset}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
        </>
    )
}

export default LeaderboardPage