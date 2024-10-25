const express = require('express');
const authRoutes = require('./src/routes/authRoutes');
const jobRoutes = require('./src/routes/jobsRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());

// routes for authentication
app.use('/api/auth', authRoutes);
// routes for jobs fetching
app.use('/api', jobRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});