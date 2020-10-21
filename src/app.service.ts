import { Injectable } from '@nestjs/common';
import { Log } from './util/logger/logger.service';

@Injectable()
export class AppService {
  constructor(private logger: Log) {
    this.logger.setContext("AppService");
  }

  getHello(): string {
    return 'Hello World!';
  }
}
