import * as express from "express";
import * as serveIndex from "serve-index";
import * as cors from "cors";
import * as http from "http";
import { ws } from "./ws";
import { WebSocketServer } from "./websocket";

const www = ".";
const port = 3000;

const app = express();
app.use(cors());

app.use("/ws", ws);

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

const server = http.createServer(app);
WebSocketServer.attach(server);
server.listen(port, () => console.log(`Server started on port ${port}`));
