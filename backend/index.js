const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(bodyParser.json());

app.get("/tarefas", async (req, res) => {
  const result = await db.query("SELECT * FROM tarefas");
  res.json(result.rows);
});

app.post("/tarefas", async (req, res) => {
  const { titulo } = req.body;
  const result = await db.query("INSERT INTO tarefas (titulo) VALUES ($1) RETURNING *", [titulo]);
  res.status(201).json(result.rows[0]);
});

app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});