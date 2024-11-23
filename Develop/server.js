const express = require("express");
const fs = require("fs"); //fs File System
const path = require("path");
const { v4: uuidv4 } = require("uuid"); //This will import unique IDs

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware to parse JSON bodies. Middleware is software that different applications use to communicate with each other.
app.use(express.json());

// Serve the notes.html file
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "notes.html"));
});

// Serve the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// GET route to read notes from db.json

app.get("/api/notes", (req, res) => {
  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read notes" });
    }
    res.json(JSON.parse(data));
  });
});

// POST route to add a new note
app.post('/api/notes', (req, res)=>{
    const newNote ={
        id: uuidv4(), // Generate a unique ID
        title: req.body.title,
        text: req.body.text
    };
    fs.readFile('db.json', 'utf8', (err,data) =>{
        if (err){
            return res.status(500).json({error:'Failed to read notes'});
        }
        const notes=JSON.parse(data);
        notes.push(newNote);
        fs.writeFile('db.json', JSON.stringify(notes, null, 2), (err) =>{
            if(err){
                return res.status(500).json({ error: 'Failed to save note'});
            }
            res.json(newNote);
        });
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});