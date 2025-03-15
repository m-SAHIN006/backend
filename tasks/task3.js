const express = require("express");
const app = express();

const fortunes = [
    "You will conquer a new challenge today! 🌟",
    "Good news is heading your way! 📬",
    "Unexpected opportunities are around the corner! 🚪",
    "Your creativity will shine brightly today! 🎨",
    "A special encounter awaits you! 🤝"
];

const jokes = [
    "messi 😂😂",
    "What do you call a bear with no teeth? A gummy bear! 🐻",
    "Why don't oysters donate to charity? Because they are shellfish! 🦪"
];

const facts = [
    "Did you know? A group of flamingos is called a 'flamboyance'! 🦩",
    "Sharks existed before trees! 🌊",
    "A day on Venus is longer than a year on Venus! 🪐"
];

app.get("/fortune", (req, res) => {
    const Fortune_num = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.send(Fortune_num);
});

app.get("/jokes", (req, res) => {
    const jks_num = Math.floor(Math.random() * jokes.length);
    res.send(jokes[jks_num]);
});

app.get("/fact", (req, res) => {
    const fact_num = facts[Math.floor(Math.random() * facts.length)];
    res.send(fact_num);
});

app.get("/", (req, res) => {
    res.send("Hello from Express");
});

app.listen(3000, () => {
    console.log("Listening on port number 3000");
});
