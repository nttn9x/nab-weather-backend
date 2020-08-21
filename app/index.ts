import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";

import routes from "./routes";

config();

const app = express();

app.use(bodyParser.json());

app.use(cors());
app.all("*", (req: any, res: any, next: any) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,OPTIONS,PATCH,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, Accept"
  );
  next();
});

// tslint:disable-next-line:only-arrow-functions
app.get("/", function (req, res) {
  res.send(JSON.stringify({ Hello: "World" }));
});

app.use("/api", routes);

app.use((err: any, req: any, res: any, next: any) => {
  if (err.status) {
    res.status(err.status).send({
      error: err?.message,
    });
  } else {
    res.status(400).send(err);
  }
});

app.listen(process.env.SERVER_PORT, () =>
  console.log(`VDC app listening on port ${process.env.SERVER_PORT}!`)
);

export default app;
