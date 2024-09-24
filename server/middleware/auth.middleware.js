const jwt = require('jsonwebtoken');

//Middleware runs when user is trying to access a protected route
const verifyToken = (req, res, next) => {
    //Get token from request
    const token = req.cookies['token'];
    //Set authentication status to false if no token exists
    if (!token) {
        return res.status(403).json({ isAuthenticated: false });
    };

    //Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        //If there is a server error, set auth status to false
        if (err) {
            return res.status(500).json({ isAuthenticated: false });
        }

        //If user role is moderator, set auth status to true, set mod status to true
        if (decoded.role === "moderator") {
            res.json({ isAuthenticated: true, isModerator: true});
        }
        //Else set auth status to true, set mod status to false
        else {
            res.json({ isAuthenticated: true, isModerator: false});
        }
        
        //Go to next middleware
        next();
    });
}

module.exports = {
    verifyToken,
};