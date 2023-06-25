import { Injectable } from '@nestjs/common';
import RoomRepository from '../repository/room.repository';
import FindManyRoomService from './providers/find-many/service';

@Injectable()
export default class RoomService {
  public findMany: FindManyRoomService;
  public constructor(private readonly roomRepository: RoomRepository) {
    this.findMany = new FindManyRoomService(this.roomRepository);
  }
}
