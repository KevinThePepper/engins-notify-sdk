import { Injectable, Logger, Scope } from '@nestjs/common';

/**
 * Custom `Logger` class for implementing admin notifications on error messages, as well
 * as additional utilities.
 * 
 * @author Kevin Shelley (kevin@egninsociety.org)
 */
@Injectable({ scope: Scope.TRANSIENT })
export class Log extends Logger {
  /**
   * Wrapper for the standard `Logger.log` static message.
   * @param message the debug message.
   * @param context additional debug message context.
   */
  info(message: string, context = ''): void {
    super.log(message, context);
  }

  /**
   * Wrapper for the standard `Logger.log` static message.
   * @param message the debug message.
   * @param context additional debug message context.
   */
  static info(message: string, context = ''): void {
    super.log(message, context);
  }

  /**
   * Logs an error message and notifies admin.
   * @param message the error message.
   * @param trace the error stack trace.
   * @param context additional error message context.
   */
  error(message: string, trace: string, context?: string): void {
    super.error(message, trace, context);
    const notify = process.env.NOTIFY_ON_ERROR === 'true' ? true : false;
    if (notify) {
      // TODO notify admin on error
    }
  }
}