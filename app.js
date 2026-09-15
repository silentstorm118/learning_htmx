import express from "express";
import createHomepageTemplate from "./views/index.js";
import createListTemplate from "./views/list.js";
import createBookTemplate from "./views/book.js";
import createEditFormTemplate from "./views/edit.js";

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
  res.send(createListTemplate(BOOK_DATA));
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const id = Math.random().toString();

  BOOK_DATA.push({id, title, author});

  res.redirect('/books/' + id);
});


app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const book = BOOK_DATA.find(b => b.id === id);

  res.send(createBookTemplate(book));
});

app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  const idx = BOOK_DATA.findIndex((b) => b.id === id);
  BOOK_DATA.splice(idx, 1);

  res.send()
});

app.put("/books/:id", (req, res) => {
  const { title, author } = req.body;
  const { id } = req.params;
  const new_book = { title, author, id }

  const idx = BOOK_DATA.findIndex((b) => b.id === id);
  BOOK_DATA[idx] = new_book;
  res.send(createBookTemplate(new_book));
});


app.get("/books/edit/:id", (req, res) => {
  const book = BOOK_DATA.find((b) => b.id === req.params.id);

  res.send(createEditFormTemplate(book))

});

app.post("/books/search", (req, res) => {
  const text = req.body.search.toLowerCase();

  const books = BOOK_DATA.filter(b => b.title.toLowerCase().includes(text))

  res.send(createListTemplate(books))
})

// listen to port
app.listen(3000, () => {
  console.log("App listening on port 3000")
});
