import { INestApplication } from '@nestjs/common';
import PrismaService from '../database/app/prisma.service';

export default class Database {
  public static async config(app: INestApplication) {
    const databaseService = app.get(PrismaService);
    await databaseService.enableShutdownHooks(app);
  }
}
