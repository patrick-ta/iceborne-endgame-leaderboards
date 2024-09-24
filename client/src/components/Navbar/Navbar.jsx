import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <nav className='flex'>
            <h2>Iceborne Endgame Leaderboards</h2>
            <ul className='flex'>
                <li>Quests</li>
                <li>Submit</li>
            </ul>
            <h3 className='login'>Login</h3>
        </nav>
        </>
    )
}

export default Navbar