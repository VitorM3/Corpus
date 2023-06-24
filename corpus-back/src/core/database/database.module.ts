import { Global, Module } from '@nestjs/common';
import PrismaService from './app/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export default class DatabaseModule {}
