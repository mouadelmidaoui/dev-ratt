const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connexion MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/monProjet")
.then(() => console.log("MongoDB connecté"))
.catch(err => console.log(err));

// route test
app.get("/", (req, res) => {
    res.send("Backend OK 🚀");
});

// lancer serveur
app.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});
fetch("http://localhost:3000")
.then(res => res.text())
.then(data => console.log(data));