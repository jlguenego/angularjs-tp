import * as express from "express";
import { ReferenceCollection } from "./ReferenceCollection";

export const ws = express.Router();

const references = new ReferenceCollection();

// make req.body working from application/json encoding.
ws.use(express.json());

ws.post("/reference", (req, res) => {
  console.log(req.body);
  const result = references.push(req.body);
  console.log(references.refs);
  res.status(201).json(result);
});
