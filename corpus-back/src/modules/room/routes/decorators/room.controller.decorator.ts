import { Controller, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export default class RoomController {
  public static default() {
    return applyDecorators(Controller('room'), ApiTags('Room'));
  }
}
