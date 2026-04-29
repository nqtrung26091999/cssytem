// src/app.ts

import express, {
  Application,
  Request,
  Response,
  NextFunction
} from "express";

import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import routes from "./routes/index.js";

const app: Application = express();

/* -------------------------------- */
/* Global Middlewares               */
/* -------------------------------- */

app.use(helmet());

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.use(compression());

app.use(cookieParser());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(morgan("dev"));

/* -------------------------------- */
/* Health Check                     */
/* -------------------------------- */

app.get(
  "/health",
  (_req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: "Server is healthy"
    });
  }
);

/* -------------------------------- */
/* API Routes                       */
/* -------------------------------- */

app.use("/api", routes);

/* -------------------------------- */
/* 404 Handler                      */
/* -------------------------------- */

app.use(
  (_req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      message: "Route not found"
    });
  }
);

/* -------------------------------- */
/* Global Error Handler             */
/* -------------------------------- */

app.use(
  (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    console.error(err);

    res.status(500).json({
      success: false,
      message:
        err.message ||
        "Internal server error"
    });
  }
);

export default app;