const SubmitPage = () => {
    return (
        <main className="left-margin">
        <h1>Submit a Run</h1>
        <input className="input-field" type="text" placeholder="Username"/>
        <input className="input-field" type="text" placeholder="Password"/>
        <input className="input-field" type="text" placeholder="Password"/>
        <select className="input-field" name="" id="">
            <option selected="true" disabled="disabled" value="">Weapon</option>
            <option value="">Greatsword</option>
        </select>
        <select className="input-field" name="" id="">
            <option selected="true" disabled="disabled" value="">Quest</option>
            <option value="">The Place Where Winter Sleeps</option>
        </select>
        <select className="input-field" name="" id="">
            <option selected="true" disabled="disabled" value="">Ruleset</option>
            <option value="">Freestyle</option>
            <option value="">TA Wiki</option>
        </select>
        <button>Submit</button>
        
        </main>
    )
}

export default SubmitPage