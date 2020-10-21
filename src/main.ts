import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Log } from './util/logger/logger.service';
import APPCONFIG from './app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Log()
  });
  
  // custom logger
  app.useLogger(new Log());

  // swagger
  const options = new DocumentBuilder()
    .setTitle('ENGINS Notification SDK')
    .setDescription('API-driven templated notifications across the ENGINS platform')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  Log.log(`Listening on port ${APPCONFIG.PORT}`);
  await app.listen(APPCONFIG.PORT);
}
bootstrap();
