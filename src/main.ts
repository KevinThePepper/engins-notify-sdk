import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { Log } from './util/logger/logger.service';
import { SWAGGER_OPTIONS_V1, REDOC_OPTIONS_V1 } from './config/redoc.config';
import { RedocModule } from 'nestjs-redoc';

/**
 * NestJS bootstrap function used to initialize, configure, and run the service.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Log()
  });
  
  // custom logger
  app.useLogger(new Log());

  // use the config service to configure our environment
  const config = app.get('ConfigService').internalConfig;
  Log.debug(config);

  // swagger version 1
  const documentV1 = SwaggerModule.createDocument(app, SWAGGER_OPTIONS_V1);
  await RedocModule.setup('/api/v1/docs', app, documentV1, REDOC_OPTIONS_V1);

  const port = config.port;
  Log.log(`Listening on port ${port}`, 'AppModule');
  await app.listen(port);
}
bootstrap();
