import * as WebSocket from "ws";
import { Server } from "http";

export class WebSocketServer {
  static wss: WebSocket.Server;

  static attach(server: Server) {
    WebSocketServer.wss = new WebSocket.Server({ server });

    WebSocketServer.wss.on("connection", function connection(ws) {
      console.log("new websocket connection");
      ws.on("message", function incoming(message) {
        console.log("received: %s", message);
      });

      ws.send("something");
    });

    console.log("websocket linked.");
  }

  static sendRefreshToClients() {
    this.wss.clients.forEach(client => {
      if (client.readyState !== WebSocket.OPEN) {
        return;
      }
      client.send("Refresh!");
    });
  }
}
