const express = require('express');
const axios = require('axios');
const authenticateToken = require('../src/middleware/auth');
const router = express.Router();

// get job list from specific link include the search and pagination
router.get('/jobs', authenticateToken, async (req, res) => {
    const { description, location, full_time, page } = req.query;

    // if (!description && !location && !full_time) {
    //     return res.status(400).json({
    //         message: 'At least one of the following parameters must be provided: description, location, full_time.'
    //     });
    // }

    try {
        let url = 'https://dev6.dansmultipro.com/api/recruitment/positions.json?';

        // append query if necessary
        if (description) url += `description=${description}&`;
        if (location) url += `location=${location}&`;
        if (page) url += `page=${page}`;

        const response = await axios.get(url);
        let jobs = response.data;

        if(full_time === 'true') {
            jobs = jobs.filter(job => job.type === "Full Time");
        }

        res.json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching jobs' });
    }
});

// get the jobs detail by id
router.get('/jobs/:id', authenticateToken, async(req, res) => {
    const { id } = req.params;

    try {
        const url = `https://dev6.dansmultipro.com/api/recruitment/positions/${id}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error)
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ message: 'Job is not found' });
        }
        res.status(500).json({ message: 'Error fetching job details' });
    }
});

module.exports = router;