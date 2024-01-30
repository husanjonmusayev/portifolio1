import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/user.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("HELLO FROM HOMPAGE"));

app.listen(PORT, () =>
  console.log(`Server Running On port: http://localhost:${PORT}`)
);
