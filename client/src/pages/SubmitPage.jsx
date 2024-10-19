import { useState } from "react"

const SubmitPage = () => {
    // Initialize state variables for speedrun submission data
    const [submissionData, setSubmissionData] = useState({
        runner: '', // Speedrunner name
        time: '', // Speedrun time
        link: '', // Link to video
        weapon: '', // Weapon used
        quest: '', // Quest name
        ruleset: '', // Ruleset/category (freestyle or ta wiki)
    })

    // State variable for validation
    const [errors, setErrors] = useState({});

    const [submitted, setSubmitted] = useState(false);

    console.log(errors)

    // Update submissionData when user inputs data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubmissionData({
            ...submissionData,
            [name]: value,
        })
    }

    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Get incorrect and missing input fields
        const newErrors = validateForm(submissionData);
        setErrors(newErrors);

        // If there are no errors, submit speedrun
        if (Object.keys(newErrors).length === 0) {
            try {
                console.log('Form submitted successfully!');
                const response = await fetch('http://localhost:5000/api/speedruns/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(submissionData),
                });
            } catch (error) {
                console.log(error);
            } finally {
                setSubmitted(true);
            }
        } else {
            console.log('Form submission failed due to validation errors.');
        }

        
    }

    // Form validation logic
    const validateForm = (data) => {
        const errors = {};

        //If fields are empty, add error message to errors object
        if (!data.runner.trim()) {
            errors.runner = 'Runner name is required';
        }

        if (!data.time.trim()) {
            errors.time = 'Time is required';
        }

        if (!data.link.trim()) {
            errors.link = 'Run link is required';
        }

        if (!data.weapon.trim()) {
            errors.weapon = 'Weapon is required';
        }

        if (!data.quest.trim()) {
            errors.quest = 'Quest name is required';
        }

        if (!data.ruleset.trim()) {
            errors.ruleset = 'Ruleset is required';
        }

        return errors;
    }

    // If speedrun is submitted successfully, return confirmation
    if (submitted) {
        return (
            <main className="left-margin">
                <h1>Speedrun submitted!</h1>
            </main>
        )
    }
    // Otherwise return speedrun form
    return (
        <main className="left-margin">
            <h1>Submit a Run</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        className="input-field" 
                        type="text" 
                        placeholder="Runner"
                        name="runner" 
                        onChange={handleChange} 
                        value={submissionData.runner}
                    />
                    {errors.runner && (
                        <span>
                            {errors.runner}
                        </span>
                    )}
                </div>

                <div>
                    <input 
                        className="input-field" 
                        type="text" 
                        placeholder="Time"
                        name="time" 
                        onChange={handleChange} 
                        value={submissionData.time}
                    />
                    {errors.time && (
                        <span>
                            {errors.time}
                        </span>
                    )}
                </div>

                <div>
                    <input 
                        className="input-field" 
                        type="text" 
                        placeholder="Link"
                        name="link" 
                        onChange={handleChange} 
                        value={submissionData.link}
                    />
                    {errors.link && (
                        <span>
                            {errors.link}
                        </span>
                    )}
                </div>

                <div>
                    <select 
                        className="input-field"
                        name="weapon" 
                        onChange={handleChange} 
                        value={submissionData.weapon}
                    >
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
                    {errors.weapon && (
                        <span>
                            {errors.weapon}
                        </span>
                    )}
                </div>

                <div>
                    <select 
                        className="input-field"
                        name="quest" 
                        onChange={handleChange} 
                        value={submissionData.quest}
                    >
                        <option value="default" hidden>Quest</option>
                        <option value="Fade to Black">Fade to Black</option>
                        <option value="The Evening Star">The Evening Star</option>
                        <option value="Dawn of the Death Star">Dawn of the Death Star</option>
                        <option value="The Place Where Winter Sleeps">The Place Where Winter Sleeps</option>
                        <option value="Mew are Number One!">Mew are Number One!</option>
                    </select>
                    {errors.quest && (
                        <span>
                            {errors.quest}
                        </span>
                    )}
                </div>

                <div>
                    <select 
                        className="input-field"
                        name="ruleset" 
                        onChange={handleChange} 
                        value={submissionData.ruleset}
                    >
                        <option value="default" hidden>Ruleset</option>
                        <option value="Freestyle">Freestyle</option>
                        <option value="TA Wiki">TA Wiki</option>
                    </select>
                    {errors.ruleset && (
                        <span>
                            {errors.ruleset}
                        </span>
                    )}
                </div>

                <button type="submit">Submit</button>

            </form>
        </main>
    )
}

export default SubmitPage