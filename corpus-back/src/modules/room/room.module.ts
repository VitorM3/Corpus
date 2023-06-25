import { Module } from '@nestjs/common';
import RoomRepository from './app/repository/room.repository';
import RoomService from './app/service/room.services';
import RoomRoutes from './routes/room.routes';

@Module({
  providers: [RoomRepository, RoomService],
  controllers: [...RoomRoutes],
  exports: [RoomService],
})
export default class RoomModule {}
