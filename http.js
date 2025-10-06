const express = require("express");
const app = express();

// Route: Home Page
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Route: About Page
app.get("/about", (req, res) => {
  res.send("About Page");
});

// Route: 404 Page for all other URLs
app.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});

app.listen(7000, () => {
  console.log(`Server running at http://localhost:7000/`);
});
