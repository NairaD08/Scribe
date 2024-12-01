const router = require("express").Router();
const { v4: uuidv4 } = require("uuid"); //This will import unique IDs
const fs = require("fs"); //fs File System

router.get("/api/notes", async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  res.json(dbJson);
});

router.post("/api/notes", async (req, res) => {
  try {
    const dbJson = await JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };
    dbJson.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});
router.delete("/api/notes/:id", async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  const newdbJson = dbJson.filter((note) => {
    return note.id !== req.params.id;
  });
  fs.writeFileSync("./db/db.json", JSON.stringify(newdbJson));
  res.status(200).json({ok:true})
});

module.exports = router;
