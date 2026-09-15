import express from "express";
import createHomepageTemplate from "./views/index.js";
import createListTemplate from "./views/list.js";
import BOOK_DATA from "./data/data.js";

const app = express();
app.use(express.urlencoded({ extended: false }));

//static assets
app.use(express.static('public'));


// routes
app.get("/", (req, res) => {
  res.send(createHomepageTemplate());
});

app.get("/books", (req, res) => {
  console.log("New Request made for Books")
  res.send(createListTemplate());
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const id = Math.random().toString();

  BOOK_DATA.push(id, title, author)

  res.send(`<li>${title}, ${author}</li>`)
});

// listen to port
app.listen(3000, () => {
  console.log("App listening on port 3000")
});
