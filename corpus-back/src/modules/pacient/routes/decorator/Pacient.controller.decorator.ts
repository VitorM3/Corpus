import { Controller, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export default class PacientController {
  public static default() {
    return applyDecorators(Controller('pacient'), ApiTags('Pacient'));
  }
}
