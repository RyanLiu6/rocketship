import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  let body = "You've hit the root of the server.\n";
  body += "Please format your request to hit a certain endpoint.";

  res.set("Content-Type", "text/plain");
  res.set("charset", "utf-8");
  res.writeHead(200);
  res.end(body);
});

app.listen(process.env.PORT || 3000);
