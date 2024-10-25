const express = require('express');
const { login, register, profile} = require('../controllers/authController')
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();
require('dotenv').config();

// register
router.post('/register', register);
// router.post('/register', async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = await User.create({ username, email, password:hashedPassword });
//         res.status(201).json({ message: 'User registered successfully', user })
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }    
// });

// login 
router.post('/login', login);
// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const user = await User.findOne({ where: {username} });
//         if(!user) return res.status(400).json({ message: 'User not found' });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: 'Invalid Credentials' });
        
//         const token = jwt.sign ({ id: user.id, username:user.username }, process.env.JWT_SECRET, {expiresIn:'1h' });
//         res.json({ token });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// check profile of current tokean bearer
router.get('/profile', authenticateToken, profile);
// const authenticateToken = require('../middleware/authMiddleware');
// router.get('/profile', authenticateToken, (req, res) => {
//     res.json({ message: `Welcome, ${req.user.username}` });
// });

module.exports = router;