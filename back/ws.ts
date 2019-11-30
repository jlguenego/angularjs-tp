import * as express from "express";

export const ws = express.Router();

const references = [];

// make req.body working from application/json encoding.
ws.use(express.json());

ws.post('/reference', (req, res) => {
    console.log(req.body);
    references.push(req.body);
    console.log(references);
    res.status(201).json(references[references.length - 1]);
});

