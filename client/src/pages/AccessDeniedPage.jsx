import { checkAuth } from "../services/authService";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AccessDeniedPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [isModerator, setIsModerator] = useState(null);

    useEffect(() => {
        const verifyAuth = async () => {
        const data = await checkAuth();
        console.log(data);
        setIsAuthenticated(data.isAuthenticated);
        setIsModerator(data.isModerator);
        }

        verifyAuth();
    }, []);
        
    if (isModerator === null) {
        return <div>Loading...</div>;
    }

    if (!isModerator && isAuthenticated) {
        return (
            <main className="left-margin">
            <h1>Sorry! You do not have permission view submissions.</h1>
            </main>
        )
    }
    else {
        return (
            <main className="left-margin">
            <h1>Sorry! You do not have permission to submit runs.</h1>
            </main>
        )
    }


    
}

export default AccessDeniedPage