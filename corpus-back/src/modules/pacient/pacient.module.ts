import { Module } from '@nestjs/common';
import PacientRepository from './app/repository/pacient.repository';
import PacientService from './app/service/pacient.service';
import PacientRoutes from './routes/pacient.routes';

@Module({
  providers: [PacientRepository, PacientService],
  controllers: [...PacientRoutes],
})
export default class PacientModule {}
