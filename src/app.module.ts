import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './util/logger/logger.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

/**
 * Base app module used to import remaining modules, controllers and services.
 */
@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      isGlobal: true,
      load: [appConfig]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  /**
   * Configures middleware for the app.
   * @param consumer Interface defining method for applying user defined middleware to routes.
   */
  configure(consumer: MiddlewareConsumer): void {
    // add logger middleware to log all requests
    consumer.apply(LoggerMiddleware).forRoutes({path: '*', method: RequestMethod.ALL});
  }
}
