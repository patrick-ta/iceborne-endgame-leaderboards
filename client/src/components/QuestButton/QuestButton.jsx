import './QuestButton.css'

const QuestButton = ({questName}) => {
    return (
        <>
        <div className='flex quest-button'>
            <img src="https://firebasestorage.googleapis.com/v0/b/iceborne-endgame-leaderboards.appspot.com/o/monster-icons%2Ffatalis.png?alt=media&token=5f15a88d-bc13-4323-9027-e71c9089b59b" alt="" />
            <div className='flex-col'>
                <h1>Fatalis</h1>
                <h2>{questName}</h2>
            </div>
        </div>
        </>
    )
}

export default QuestButton