import "dotenv/config.js";
import express from "express";
import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import dbConnect from "./src/helpers/dbConnect.helpers.js";
import cors from "cors";

const server = express();
const port = 8080;

/* MIDDLEWARES */
server.use(cors());
server.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

/* ROUTERS */
server.use("/", router);
server.use(errorHandler);
server.use(pathHandler);

/* DB + START */
dbConnect()
    .then(() => {
        server.listen(port, () => {
        console.log("✅ Server ready on port " + port);
        });
    })
    .catch((err) => {
        console.error("❌ DB Connection Failed:", err);
    });
