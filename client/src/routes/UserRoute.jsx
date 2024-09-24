import { checkAuth } from "../services/authService";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const UserRoute = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyAuth = async () => {
      const data = await checkAuth();
      console.log(data);
      setIsAuthenticated(data.isAuthenticated);
    }

    verifyAuth();
  }, []);
    
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return children;
  }
  else {
    return <Navigate to="/"/>;
  }
};
  
export default UserRoute;