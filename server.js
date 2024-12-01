const express = require("express");
const router = express.Router();
const html_routes = require("./routes/html-routes");
const notes_routes = require("./routes/api-routes");
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware to parse JSON bodies. Middleware is software that different applications use to communicate with each other.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(html_routes);
app.use(notes_routes);

app.use("/api", router); // Make sure this is correct

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});
// Your POST route should be defined here
router.post("/notes", (req, res) => {
  // Your existing code
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
































// // Serve the notes.html file
// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "develop", "public", "notes.html"));
// });

// // Serve the index.html file
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "develop", "public", "index.html"));
// });

// // GET route to read notes from db.json

// app.get("/api/notes", (req, res) => {
//   // fs.readFile("./develop/db/db.json", "utf8", (err, data) => {
//   fs.readFile(
//     path.join(_dirname, "develop", "db", "db.json"),
//     "utf8",
//     (err, data) => {
//       if (err) {
//         return res.status(500).json({ error: "Failed to read notes" });
//       }
//       res.json(JSON.parse(data));
//     }
//   );
// });

// POST route to add a new note
// app.post("/api/notes", (req, res) => {
//   const newNote = {
//     id: uuidv4(), // Generate a unique ID
//     title: req.body.title,
//     text: req.body.text,
//   };
//   fs.readFile("./develop/db/db.json", "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).json({ error: "Failed to read notes" });
//     }
//     const notes = JSON.parse(data);
//     notes.push(newNote);
//     fs.writeFile(
//       "./develop/db/db.json",
//       JSON.stringify(notes, null, 2),
//       (err) => {
//         if (err) {
//           return res.status(500).json({ error: "Failed to save note" });
//         }
//         res.json(newNote);
//       }
//     );
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
