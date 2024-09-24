import './Navbar.css'
import { useState, useEffect } from 'react';
import { checkAuth } from '../../services/authService'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
    const verifyRole = async () => {
        const data = await checkAuth();
        console.log(data.isAuthenticated, data.isModerator)
        setIsAuthenticated(data.isAuthenticated);
    }

    verifyRole();
    }, []);

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/logout', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({}), 
            });
            navigate('/');
        } catch(error) {
            console.log(error);
        }
        
    }

    return (
        <>
        <nav className='flex'>
            <h2>Iceborne Endgame Leaderboards</h2>
            <ul className='flex'>
                <li>Quests</li>
                <li>Submit</li>
            </ul>
            
            {isAuthenticated ? <button onClick={handleLogout} className='login'>Logout</button> : <button onClick={() => navigate('/login')} className='login'>Login</button>}
            
        </nav>
        </>
    )
}

export default Navbar