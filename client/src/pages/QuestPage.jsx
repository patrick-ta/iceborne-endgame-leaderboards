import { useEffect, useState } from "react"
import QuestButton from "../components/QuestButton/QuestButton"

const QuestPage = () => {
    const [quests, setQuests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuests = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/quests/get-quests', {
                    method: 'GET',
                    credentials: 'include',
                });
                const data = await response.json();
                setQuests(data); 
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); 
            }
        }

        fetchQuests();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <main className="left-margin">
        <h1>Quests</h1>

        <ul>
            {quests.map((quest) => (
                <li key={quest.id}>
                    <QuestButton monster={quest.monster} questName={quest.quest_name} imageUrl={quest.image_url}/>
                </li>
            ))}
        </ul>

        </main>
        </>
    )
}

export default QuestPage