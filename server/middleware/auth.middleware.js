const jwt = require('jsonwebtoken');

//middleware runs when user is trying to access a protected route
const verifyToken = (req, res, next) => {
    const token = req.cookies['token'];
    if (!token) {
        return res.status(403).json({ isAuthenticated: false });
    };

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({ isAuthenticated: false });
        }
        res.json({ isAuthenticated: true });
        next();
    });
};

//middleware runs when user is trying to access a moderator route
const verifyRole = (req, res, next) => {
    const token = req.cookies['token'];
    if (!token) {
        return res.status(403).json({ isAuthenticated: false });
    };

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({ isAuthenticated: false });
        }
        if (decoded.role === "moderator") {
            res.json({ isAuthenticated: true, isModerator: true});
        }
        else {
            res.json({ isAuthenticated: true, isModerator: false});
        }
        
        next();
    });
}

//I will combine verifyToken and verifyRole later
module.exports = {
    verifyToken,
    verifyRole,
};