const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    tasks[id] = { title, description };
    res.json(tasks[id]);
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    tasks.splice(id, 1);
    res.sendStatus(204);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
