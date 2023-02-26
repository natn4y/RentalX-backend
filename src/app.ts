/* eslint-disable import-helpers/order-imports */
import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import { AppError } from "@errors/AppError";

import createConnection from "./database";

import "express-async-errors";

import "@shared/container";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

createConnection();
const app = express();

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

export { app };
