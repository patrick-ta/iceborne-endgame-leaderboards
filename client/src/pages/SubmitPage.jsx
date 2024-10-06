import { useState } from "react"

const SubmitPage = () => {
    const [runner, setRunner] = useState('');
    const [time, setTime] = useState('');
    const [link, setLink] = useState('');
    const [weapon, setWeapon] = useState('');
    const [quest, setQuest] = useState('');
    const [ruleset, setRuleset] = useState('');

    const handleRunnerChange = (event) => setRunner(event.target.value);
    const handleTimeChange = (event) => setTime(event.target.value);
    const handleLinkChange = (event) => setLink(event.target.value);
    const handleWeaponChange = (event) => setWeapon(event.target.value);
    const handleQuestChange = (event) => setQuest(event.target.value);
    const handleRulesetChange = (event) => setRuleset(event.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("test")
            const response = await fetch('http://localhost:5000/api/speedruns/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({runner, time, link, weapon, quest, ruleset}),
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="left-margin">
            <h1>Submit a Run</h1>
            <form onSubmit={handleSubmit}>
                <input className="input-field" type="text" placeholder="Runner"
                onChange={handleRunnerChange} value={runner}/>

                <input className="input-field" type="text" placeholder="Time"
                onChange={handleTimeChange} value={time}/>

                <input className="input-field" type="text" placeholder="Link"
                onChange={handleLinkChange} value={link}/>

                <select className="input-field"
                onChange={handleWeaponChange} value={weapon}>
                    <option value="default" hidden>Weapon</option>
                    <option value="Greatsword">Greatsword</option>
                    <option value="Longsword">Longsword</option>
                    <option value="Sword and Shield">Sword and Shield</option>
                    <option value="Dual Blades">Dual Blades</option>
                    <option value="Hammer">Hammer</option>
                    <option value="Hunting Horn">Hunting Horn</option>
                    <option value="Lance">Lance</option>
                    <option value="Gunlance">Gunlance</option>
                    <option value="Switch Axe">Switch Axe</option>
                    <option value="Charge Blade">Charge Blade</option>
                    <option value="Insect Glaive">Insect Glaive</option>
                    <option value="Light Bowgun">Light Bowgun</option>
                    <option value="Heavy Bowgun">Heavy Bowgun</option>
                    <option value="Bow">Bow</option>
                </select>

                <select className="input-field"
                onChange={handleQuestChange} value={quest}>
                    <option value="default" hidden>Quest</option>
                    <option value="Fade to Black">Fade to Black</option>
                    <option value="The Evening Star">The Evening Star</option>
                    <option value="Dawn of the Death Star">Dawn of the Death Star</option>
                    <option value="The Place Where Winter Sleeps">The Place Where Winter Sleeps</option>
                    <option value="Mew are Number One!">Mew are Number One!</option>
                </select>

                <select className="input-field"
                onChange={handleRulesetChange} value={ruleset}>
                    <option value="default" hidden>Ruleset</option>
                    <option value="Freestyle">Freestyle</option>
                    <option value="TA Wiki">TA Wiki</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default SubmitPage