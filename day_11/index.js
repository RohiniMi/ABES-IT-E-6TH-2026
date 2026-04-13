import express from "express";
import {
    createUser,
    readUsers,
    updateUser,
    deleteUser
} from "./controller/crud.js";
import dbConnect from "./config/db.js";
import routeErrorHandler from "./middleware/routeErrorHandler.js";

const app = express();
const PORT = 8800;

dbConnect();
app.use(express.json()); //middleware

app.get("/users", readUsers);
app.post("/users", createUser);
app.put("/users/:email", updateUser);
app.delete("/users/:email", deleteUser);

app.use(routeErrorHandler); //middleware for route error

app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`));
