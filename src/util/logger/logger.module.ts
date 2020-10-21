import { Module } from '@nestjs/common';
import { Log } from './logger.service';

/**
 * Logger module for allowing the user of the custom logger for both system
 * and application logging:
 * https://docs.nestjs.com/techniques/logger#using-the-logger-for-application-logging
 * 
 * @author Kevin Shelley (kevin@enginsociety.org)
 */
@Module({
  providers: [Log],
  exports: [Log],
})
export class LoggerModule {}