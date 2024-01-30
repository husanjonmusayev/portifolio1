import express from "express";

import { v4 as uuidv4 } from "uuid";

let users = [];

const router = express.Router();

// all users

router.get("/", (req, res) => {
  res.send(users);
});

// POST

router.post("/", (req, res) => {
  console.log('Post send');

  console.log(req.body);
  //   let user = req.body;
  //   let userId = uuidv4();
  //   let userWithId = { ...user, id: userId };
  //   users.push(userWithId);
  res.send(`Muoffaqaiyatli ro'yxatdan o'tdi`);
});

// GET

router.get("/id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

// DELETE

router.delete("/id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`${id} foydalanuvchi o'chirildi`);
});

// UPDATE

router.get("/id", (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, username, email, pssword } = req.body;

  const users = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (username) user.username = username;
  if (email) user.email = email;
  if (pssword) user.pssword = pssword;

  res.send(`foydalanuvchi malumotlari ozgartirildi`);
});

export default router;
