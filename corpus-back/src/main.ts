import { NestFactory } from '@nestjs/core';
import AppModule from './core/app.module';
import Database from './core/config/database';
import Swagger from './core/config/swagger';
import Validator from './core/config/validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  Database.config(app);
  Swagger.config(app);
  Validator.config(app);
  await app.listen(3000);
}
bootstrap();
