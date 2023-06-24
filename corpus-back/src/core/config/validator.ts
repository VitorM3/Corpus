import { INestApplication, ValidationPipe } from '@nestjs/common';

export default class Validator {
  public static config(app: INestApplication) {
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    );
  }
}
