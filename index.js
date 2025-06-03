import express from "express";

const app = express();
const PORT = 3000;

app.get("", (req, res) => {
  res.status(200).json({ message: "Home Route" });
});

app.get("/about", (req, res) => {
  res.status(200).json({ message: "About Route" });
});

app.get("/contact", (req, res) => {
  res.status(200).json({ message: "Contact Route" });
});

app.get("/services", (req, res) => {
  res.status(200).json({ message: "Services Route" });
});

app.get("/products", (req, res) => {
  res.status(200).json({ message: "Products Route" });
});

app.listen(PORT, () => {
  console.log(`Server are running now on : http://localhost:${PORT}`);
});
