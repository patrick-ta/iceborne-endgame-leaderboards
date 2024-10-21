import { useNavigate } from "react-router-dom";

import QuestButton from "../components/QuestButton/QuestButton"

import useFetchQuests from "../hooks/useFetchQuests";

const QuestPage = () => {
    // Invoke useFetchQuests to get loading state and quest list
    const { isLoadingQuests, quests } = useFetchQuests();

    // Navigation to quest leaderboard pages
    const navigate = useNavigate();
    const navigateToLeaderboard = (questNameParam) => {
        navigate(`/quests/${questNameParam}`);
    }

    // If the quests are still loading, return loading text
    if (isLoadingQuests) {
        return <div>Loading...</div>;
    }
    // Otherwise display quest buttons
    return (
        <>
        <main className="left-margin">
            <h1>Quests</h1>

            <ul>
                {quests.map((quest) => (
                    <li 
                        key={quest.id} 
                        onClick={() => navigateToLeaderboard(quest.quest_name_param)}
                    >
                        <QuestButton monster={quest.monster} questName={quest.quest_name} imageUrl={quest.image_url}/>
                    </li>
                ))}
            </ul>
        </main>
        </>
    )
}

export default QuestPage