import { checkAuth } from "../services/authService";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ModeratorRoute = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isModerator, setIsModerator] = useState(null);

  useEffect(() => {
    const verifyRole = async () => {
      const data = await checkAuth();
      console.log(data.isAuthenticated, data.isModerator)
      setIsAuthenticated(data.isAuthenticated);
      setIsModerator(data.isModerator);
    }

    verifyRole();
  }, []);
    
  if (isModerator === null || isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (isModerator) {
    return children;
  }
  else{
    return <Navigate to="/access-denied"/>;
  }

};
  
export default ModeratorRoute;