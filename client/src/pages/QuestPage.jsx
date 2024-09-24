import QuestButton from "../components/QuestButton/QuestButton"

const QuestPage = () => {
    const fadeToBlack = 'Fade to Black'
    const theEveningStar = 'The Evening Star'
    const dawnOfTheDeathStar = 'Dawn of the Death Star'
    const thePlaceWhereWinterSleeps = 'The Place Where Winter Sleeps'
    const mewAreNumberOne = 'Mew are Number One!'

    return (
        <>
        <main className="left-margin">
        <h1>Quests</h1>
        <QuestButton questName={fadeToBlack}/>
        <QuestButton questName={theEveningStar}/>
        <QuestButton questName={dawnOfTheDeathStar}/>
        <QuestButton questName={thePlaceWhereWinterSleeps}/>
        <QuestButton questName={mewAreNumberOne}/>
        </main>
        </>
    )
}

export default QuestPage