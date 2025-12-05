import cors from "cors";
import express, { Application, Response, Request } from "express";
import helmet from "helmet";
import { requestLogger } from "./middleware/logger.middleware";
export const createApp = (): Application => {
  const app = express();

  app.use(helmet());
  app.use(cors());

  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));
  app.use(requestLogger);

  app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello wordl" });
  });

  app.use((req: Request, res: Response) => {
    res.status(404).json({
      error: "Not Found",
      message: `Route $${req.method} ${req.path} not found`,
      timestamp: new Date().toISOString(),
    });
  });

  return app;
};
