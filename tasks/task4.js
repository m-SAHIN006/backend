const { urlencoded, json } = require("body-parser");
const express = require("express");
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

const missions = [
    {
        id: "1",
        missionName: "Apollo",
        astronaut: ["Joseph M. Acaba", "Loren Acton"],
        progress: 100,
    },
    {
        id: "2",
        missionName: "Apollo1",
        astronaut: ["Khattab", "Ali AlQarni", "Yuri Artyukhin"],
        progress: 100,
    },
    {
        id: "3",
        missionName: "ALLSTAR",
        astronaut: ["AL AlOami", "Yuri Artyukhin"],
        progress: 100,
    },
    {
        id: "4",
        missionName: "AirSTAR",
        astronaut: ["Khattab", "Jeffrey Ashby", "Terrence Wilc"],
        progress: 90,
    },
];

// Create new mission
app.post("/missions", (req, res) => {
    const data = req.body;
    if (!data.id || !data.missionName || !data.astronaut || !data.progress) {
        return res.status(400).send("Missing required fields.");
    }
    data.astronaut = data.astronaut.split(",");
    missions.push(data);
    res.send("Mission created successfully.");
});

// Get all missions
app.get("/missions", (req, res) => {
    res.send(missions);
});

// Get specific mission
app.get("/mission/:id", (req, res) => {
    const paramsId = req.params.id;
    const mission = missions.find((m) => m.id === paramsId);
    if (mission) {
        return res.send(mission);
    }
    res.status(404).send("Mission not found.");
});

// Edit a mission
app.put("/mission", (req, res) => {
    const data = req.body;
    if (!data.id || !data.missionName || !data.astronaut || !data.progress) {
        return res.status(400).send("Missing required fields.");
    }
    data.astronaut = JSON.parse(data.astronaut);

    const missionIndex = missions.findIndex((m) => m.id === data.id);
    if (missionIndex !== -1) {
        missions[missionIndex] = data;
        return res.send("Mission updated successfully.");
    }
    res.status(404).send("Mission not found.");
});

// Delete a mission
app.delete("/mission/:id", (req, res) => {
    const paramsId = req.params.id;
    const missionIndex = missions.findIndex((m) => m.id === paramsId);
    if (missionIndex !== -1) {
        missions.splice(missionIndex, 1);
        return res.send("Mission deleted successfully.");
    }
    res.status(404).send("Mission not found.");
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log("The server is running on port " + port);
});