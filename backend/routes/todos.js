const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'GET todo list' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'GET todo by id' });
});

router.post('/', (req, res) => {
  res.json({ message: 'POST a new todo' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE todo by id' });
});

// UPDATE todo
router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE todo by id'});
});

router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

module.exports = router;