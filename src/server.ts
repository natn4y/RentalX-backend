import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import { AppError } from "@errors/AppError";

import "express-async-errors";

import "./database";
import "@shared/container";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
  (e: Error, request: Request, response: Response, next: NextFunction) => {
    if (e instanceof AppError) {
      return response.status(e.statusCode).json({
        message: e.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${e.message}`,
    });
  }
);

app.listen(port, () => {
  console.log(`[SERVER RUNNING]: listening on port: ${port}`);
});
