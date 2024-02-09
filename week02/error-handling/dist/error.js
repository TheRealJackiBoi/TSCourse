import log4js from 'log4js';
const logger = log4js.getLogger();
logger.level = 'debug';
export class ApiError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
    getResMessage() {
        return `${this.status}: ${this.message}`;
    }
}
export const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};
export const apiErrorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        res.status(404).json({
            "message": err.getResMessage(),
            "status": err.status
        });
    }
    else {
        next();
    }
};
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
};
