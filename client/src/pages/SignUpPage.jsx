import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
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
        <main className="left-margin">

            <h1>Sign Up</h1>

            <div>
                <input 
                    className="input-field" 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input 
                    className="input-field" 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            
            <p>
                Already have an account? 
                <span onClick={() => navigate("/login")}>
                Log in!
                </span>

            </p>

            
            <button onClick={handleSignUp}>Sign Up</button>
        
        </main>
    )
}

export default SignUpPage