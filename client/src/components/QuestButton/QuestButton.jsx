import './QuestButton.css'

const QuestButton = ({monster, questName, imageUrl}) => {
    return (
        <>
        <div className='flex quest-button'>
            <img src={imageUrl} alt="" />
            <div className='flex-col'>
                <h1>{monster}</h1>
                <h2>{questName}</h2>
            </div>
        </div>
        </>
    )
}

export default QuestButton