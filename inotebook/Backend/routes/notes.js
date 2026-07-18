const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   console.log('Get all notes');
   res.json({ message: 'Get all notes' });
});

router.post('/', (req, res) => {
   console.log('Create note');
   res.json({ message: 'Create note' });
});

module.exports = router;
