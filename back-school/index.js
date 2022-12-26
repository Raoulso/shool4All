const express = require("express");
// require("dotenv").config();
// const mysql = require("mysql");

const db = {
  users: [
    { id_user: 1, email: "prof", name: "prof", role: "prof" },
    { id_user: 2, email: "stud", name: "kala", role: "stud" },
  ],
  topics: [
    { id: 1, label: "Maths" },
    { id: 2, label: "English" },
    { id: 3, label: "Fisic" },
    { id: 4, label: "Chemistry" },
    { id: 5, label: "History" },
  ],
  students: [
    { id_student: 1, name: "Brian"},
    { id_student: 2, name: "Raoul" },
    { id_student: 3, name: "Toto" },
    { id_student: 4, name: "Patchou" },
    { id_student: 5, name: "Popol" },
  ],
  grade: [
    { id_student: 1, id_topic: 1, note: 5},
    { id_student: 1, id_topic: 3,  note: 8 },
    { id_student: 3, id_topic: 1,  note: 7},
    { id_student: 4, id_topic: 2,  note: 9 },
    { id_student: 5, id_topic: 2,  note: 5 },
  ],
  user_has_topic: [
    { id_topic: 1, id_user: 1 },
    { id_topic: 3, id_user: 2 },
    { id_topic: 2, id_user: 1 },
  ],
};

const cors = require("cors");
const app = express();
app.use(cors());
app.options('*', cors());
const PORT = 8082;
const ORIGINS = "*";

app.post("/login", async (req, res) => {
 // receive a parameter and console.log it, put it in a variable and match with users role
  res.send(db.users);
});
app.get("/topic", async (req, res) => {
  
  res.send(db.topics);
});
app.get("/students", async (req, res) => {
  
  res.send(db.students);
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

//app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
