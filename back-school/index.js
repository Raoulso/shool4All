const express = require("express");
// require("dotenv").config();
// const mysql = require("mysql");

const db = {
  users: [
    { id: 1, email: "prof", name: "prof", role: "prof" },
    { id: 2, email: "stud", name: "kala", role: "stud" },
  ],
  topics: [
    { id: 1, label: "maths" },
    { id: 2, label: "english" },
    { id: 3, label: "fisic" },
  ],
  user_has_topic: [
    { id_topic: 1, id_user: 1 },
    { id_topic: 3, id_user: 2 },
    { id_topic: 2, id_user: 1 },
  ],
};

const cors = require("cors");
const app = express();

const PORT = 8082;
const ORIGINS = "*";

app.get("/login", async (req, res) => {
  res.send(db.users[0]);
});

app.get("/register", async (req, res) => {
  const idU = Number(req.query.idT);

  const idT = Number(req.query.idU);

  db.user_has_topic.push({ id_user: idU, id_topic: idT });

  res.send({ resutl: true, message: "update ok" });
});

app.get("/api/test", async (req, res) => {
  const idUser = req.query.id;

  console.log(db.user_has_topic);
  const topics = db.user_has_topic.filter((us) => us.id_user == idUser);
  const mappedTopic = topics.map((ut) => {
    const topic = db.topics.find((to) => to.id == ut.id_topic);
    return topic;
  });

  console.log(topics);
  res.send(mappedTopic);
});

const server = app.listen(PORT, () => {
  console.log(`SERVER START ON PORT : ${PORT} ...`);
});

app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
