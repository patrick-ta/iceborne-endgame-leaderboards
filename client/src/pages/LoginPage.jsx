import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    console.log(username);
    console.log(password);

    const handleLogin = async () => {
        try {
            console.log("test")
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({username, password}),
            });

            
            navigate('/');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <main className="left-margin">

        <h1>Login</h1>
        <input className="input-field" type="text" placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <input className="input-field" type="password" placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <p>Don't have an account? Sign up!</p>
        <button onClick={handleLogin}>Login</button>
        
        </main>
        </>
    )
}

export default LoginPage