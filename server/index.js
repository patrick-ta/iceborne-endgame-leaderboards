const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const questRoutes = require('./routes/quests.routes')
const speedrunRoutes = require('./routes/speedrun.routes')

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/quests', questRoutes);
app.use('/api/speedruns', speedrunRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});