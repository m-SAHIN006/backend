const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample data to simulate a database
let scores = [];

// POST /scores: Add a new score
app.post('/scores', (req, res) => {
    const { playerName, score } = req.body;
    if (!playerName || typeof score !== 'number') {
        return res.status(400).json({ error: 'Invalid input data' });
    }
    const newScore = { id: scores.length + 1, playerName, score };
    scores.push(newScore);
    res.status(201).json(newScore);
});

// GET /scores: Get the leaderboard
app.get('/scores', (req, res) => {
    const sortedScores = scores.sort((a, b) => b.score - a.score);
    res.json(sortedScores);
});

// DELETE /scores/:id: Delete a score by ID
app.delete('/scores/:id', (req, res) => {
    const { id } = req.params;
    const scoreIndex = scores.findIndex(score => score.id === parseInt(id));
    if (scoreIndex === -1) {
        return res.status(404).json({ error: 'Score not found' });
    }
    scores.splice(scoreIndex, 1);
    res.status(200).json({ message: 'Score deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
