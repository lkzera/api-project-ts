const path = require('path')
require('dotenv').config({
    path: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, '../.env') : path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`)
});
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/AppError";
import morgan from "morgan";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            success: false,
            message: err.message,
            result: []
        });
    }

    return response.status(500).json({
        success: false,
        message: `Internal server error - ${err.message}`,
        result: []
    });
})


const PORT = process.env.APPLICATION_PORT || 3333;


app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));