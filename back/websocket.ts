import * as WebSocket from "ws";
import { Server } from "http";

export const webSocket = {
  attach(server: Server) {
    const wss = new WebSocket.Server({ server });

    wss.on("connection", function connection(ws) {
      console.log("new websocket connection");
      ws.on("message", function incoming(message) {
        console.log("received: %s", message);
      });

      ws.send("something");
    });

    console.log('websocket linked.');
  }
};
