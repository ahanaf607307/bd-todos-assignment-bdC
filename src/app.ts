import express, { Application, Request, Response } from "express";
import routes from "./app/routes";

const app: Application = express();
app.use(express.json());

// connect routes
app.use(routes);
app.get("/", (req: Request, res: Response) => {
  res.send("Server is runnig now ✅");
  console.log(req.body);
});
export default app;
