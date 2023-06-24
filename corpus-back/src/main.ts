import { NestFactory } from '@nestjs/core';
import AppModule from './core/app.module';
import Swagger from './core/config/swagger';
import Database from './core/config/database';
import Validator from './core/config/validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Database.config(app);
  Swagger.config(app);
  Validator.config(app);
  await app.listen(3000);
}
bootstrap();
