const express = require("express");
// require("dotenv").config();
// const mysql = require("mysql");

const db = {
  users: [
    { id: 1, email: "prof", name: "prof", password: "prof", role: "TECHEAR" },
    { id: 2, email: "stud", name: "kala", password: "stud", role: "STUDENTE" },
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
const PORT = 8083;
const ORIGINS = "*";
app.use(cors(ORIGINS));

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("for login , i receive this body---------------");
  console.log(req.body);
  console.log("----------------------------------------------");
  const user = db.users.find((u) => u.email === username);
  if (!user) {
    res.send({ error: true, message: "username don't exists" });
  } else {
    if (user.password != password) {
      res.send({ error: true, message: "wrong password " });
    } else {
      const data = { role: user.role, name: user.name, id: user.id, username };
      res.send(data);
    }
  }
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
