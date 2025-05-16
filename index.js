import express from "express";

const app = express();
const PORT = 3000;

app.get("", (req, res) => {
  res.status(200).json({ message: "Home Route" });
});

app.listen(PORT, () => {
  console.log(`Server are running now on : http://localhost:${PORT}`);
});
