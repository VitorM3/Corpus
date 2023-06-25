import { Controller, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export default class ExerciseController {
  public static default() {
    return applyDecorators(Controller('exercise'), ApiTags('Exercise'));
  }
}
