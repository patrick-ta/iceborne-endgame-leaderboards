import { useNavigate } from "react-router-dom";

import './QuestPage.css'

import QuestButton from "../../components/QuestButton/QuestButton"

import useFetchQuests from "../../hooks/useFetchQuests";

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
        <div>
            <main className="left-margin">
                <h1>Quests</h1>

                <ul>
                    {quests.map((quest) => (
                        <li 
                            className="quest-button-list"
                            key={quest.id} 
                            onClick={() => navigateToLeaderboard(quest.quest_name_param)}
                        >
                            <QuestButton monster={quest.monster} questName={quest.quest_name} imageUrl={quest.image_url}/>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default QuestPage