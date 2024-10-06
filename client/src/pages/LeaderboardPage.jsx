import { useParams } from "react-router-dom"

const LeaderboardPage = () => {
    const { questNameParam } = useParams();

    return (
        <div>{questNameParam}</div>
    )
}

export default LeaderboardPage