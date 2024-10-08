import './LeaderboardPage.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const LeaderboardPage = () => {
    const { questNameParam } = useParams();
    const [loading, setLoading] = useState(true);
    const [speedruns, setSpeedruns] = useState([]);

    useEffect(() => {
        const fetchSpeedruns = async () => {
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
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchSpeedruns();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <main className='left-margin'>
        <div>{questNameParam}</div>
        
        <table>
            <thead>
                <tr>
                    <th className="medium-width">Runner</th>
                    <th className="small-width">Time</th>
                    <th className="medium-width">Weapon</th>
                    <th className="large-width">Quest</th>
                    <th className="small-width">Ruleset</th>
                </tr>
            </thead>

            <tbody>
                {speedruns.map((speedrun, index) => (
                    <tr key={index}>
                        <td>{speedrun.runner}</td>
                        <td>
                            <a href={speedrun.link} target="_blank" rel="noopener noreferrer">{speedrun.time}</a>
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