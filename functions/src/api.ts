import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const api = express.Router();

api.get("/", (_req, res) => {
  res.send("Hello, api");
});

app.use(helmet());
app.use(morgan(process.env.NODE_ENV === "production" ? "common" : "dev"));
app.use("/api", api);

export default app;
