import { NestFactory } from '@nestjs/core';
import AppModule from './core/app.module';
import Swagger from './core/config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Swagger.config(app);
  await app.listen(3000);
}
bootstrap();
