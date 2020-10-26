import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { failedResponseJson } from '../../util/response.util';
import { LoggingInterceptor } from '../../interceptors/logging.interceptor';
import { Log } from 'src/util/logger/logger.service';

/**
 * Custom exception handler that returns the exception in the response structure formatted for this project.
 *
 * @author Kevin Shelley (kevin@enginsociety.org)
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // logger interceptor to record error messages with the logger
  private loggingIntercept = null;

  constructor() {
    this.loggingIntercept = new LoggingInterceptor(new Log());
  }

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    this.loggingIntercept.log(request, status);

    response
      .status(status)
      .json(failedResponseJson(exception.message, { path: request.url }));
  }
}
