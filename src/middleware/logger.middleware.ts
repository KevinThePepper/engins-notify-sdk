import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { Log } from '../util/logger/logger.service';

/**
 * Logs access requests.
 * 
 * @author Kevin Shelley (kevin@enginsociety.org)
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(private logger: Log) {
        this.logger.setContext("Access");
    }
    /**
     * Logs access to endpoints with their status.
     * @param req the http request object.
     * @param res the http response object.
     * @param next the next method in the response sequence.
     */
    use(req: Request, res: Response, next: () => void) {
        this.logger.info(`${req.method} ${req.originalUrl} [${res.statusCode}]`);
        next();
    }
}