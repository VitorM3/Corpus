import { Injectable } from '@nestjs/common';
import PrismaService from 'src/core/database/app/prisma.service';
import GetRoomRepository from './class/get-room.repository';

@Injectable()
export default class RoomRepository {
  public get: GetRoomRepository;

  public constructor(private readonly prismaService: PrismaService) {
    this.get = new GetRoomRepository(this.prismaService);
  }
}
