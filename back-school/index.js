const express = require("express");
// require("dotenv").config();
// const mysql = require("mysql");

const db = {
  users: [
    { id: 1, email: "prof", name: "prof", role: "prof" },
    { id: 2, email: "stud", name: "kala", role: "stud" },
  ],
  topics: [
    { id: 1, label: "Mathematique" },
    { id: 2, label: "english" },
    { id: 3, label: "fisic" },
    { id: 4, label: "Chemistry" },
    { id: 5, label: "History" },
  ],
  user_has_topic: [
    { id_topic: 1, id_user: 1 },
    { id_topic: 1, id_user: 2 },
    { id_topic: 3, id_user: 2 },
    { id_topic: 2, id_user: 1 },
  ],
};

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = 8083;
const ORIGINS = "*";

app.post("/login", async (req, res) => {
  console.log("body");
  console.log(req.body);

  console.log("body");
  res.send(db.users[0]);
});

app.get("/register", async (req, res) => {
  const idU = Number(req.query.idT);

  const idT = Number(req.query.idU);

  db.user_has_topic.push({ id_user: idU, id_topic: idT });

  res.send({ resutl: true, message: "update ok" });
});

app.get("/api/students", async (req, res) => {
  const idUser = req.query.id;

  const topics = db.user_has_topic.filter((us) => us.id_user == idUser);
  const mappedTopic = topics.map((ut) => {
    const topic = db.topics.find((to) => to.id == ut.id_topic);
    return topic;
  });

  res.send(mappedTopic);
});

app.get("/api/students/:id", async (req, res) => {
  const idUser = req.query.id;

  console.log(db.user_has_topic);
  const topics = db.user_has_topic.filter((us) => us.id_user == idUser);
  const mappedTopic = topics.map((ut) => {
    const topic = db.topics.find((to) => to.id == ut.id_topic);
    return topic;
  });

  res.send(mappedTopic);
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
