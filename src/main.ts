import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { Log } from './util/logger/logger.service';
import { SWAGGER_OPTIONS, REDOC_OPTIONS } from './config/redoc.config';
import { RedocModule } from 'nestjs-redoc';
import { HttpExceptionFilter } from './exceptions/filters/http-exception.filter';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

/**
 * NestJS bootstrap function used to initialize, configure, and run the service.
 */
async function bootstrap() {
  const logger = new Log();
  const app = await NestFactory.create(AppModule, {
    logger: logger
  });
  
  // custom logger
  app.useLogger(logger);

  // use the config service to configure our environment
  const config = app.get('ConfigService').internalConfig;
  Log.debug(config);

  // swagger
  const document = SwaggerModule.createDocument(app, SWAGGER_OPTIONS);
  await RedocModule.setup('/api/docs', app, document, REDOC_OPTIONS);

  // add custom filters
  app.useGlobalFilters(new HttpExceptionFilter());

  // custom interceptors
  app.useGlobalInterceptors(new LoggingInterceptor(logger));

  const port = config.port;
  Log.log(`Listening on port ${port}`, 'AppModule');
  await app.listen(port);
}
bootstrap();
