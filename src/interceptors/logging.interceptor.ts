import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Scope,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Log } from '../util/logger/logger.service';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logger?: Log) {
    this.logger.setContext('Access');
  }

  log(req, status) {
    const message = `${req.method} ${req.originalUrl} [${status}]`;
    if (status >= 400) {
      this.logger.warn(message);
    } else {
      this.logger.info(message);
    }
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    return next.handle().pipe(tap(() => this.log(req, res.statusCode)));
  }
}
