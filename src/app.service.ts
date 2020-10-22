import { Injectable } from '@nestjs/common';
import { Log } from './util/logger/logger.service';

/**
 * Base app service.
 */
@Injectable()
export class AppService {
  constructor(private logger: Log) {
    this.logger.setContext("AppService");
  }

  /**
   * Returns the string _test_.
   * @returns The string _test_.
   */
  getTest(): string {
    return 'test';
  }
}
