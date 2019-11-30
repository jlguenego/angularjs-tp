import * as express from "express";
import * as serveIndex from "serve-index";
import * as cors from "cors";

const www = ".";
const port = 3000;

const app = express();
app.use(cors());

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => console.log(`Server started on port ${port}`));
