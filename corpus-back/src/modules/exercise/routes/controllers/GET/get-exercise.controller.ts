import ExerciseService from 'src/modules/exercise/app/service/exercise.service';
import ExerciseController from '../../decorators/exercise.controller.decorator';
import { Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';
import ExerciseEntity from 'src/modules/exercise/app/repository/entity/exercise.entity';
import FindManyExerciseDTO from 'src/modules/exercise/domain/dto/find-many.dto';

@ExerciseController.default()
export default class GetExerciseController {
  public constructor(private readonly service: ExerciseService) {}

  @Get()
  @ApiOperation({
    description: 'Buscar todos os exercícios cadastrados no sistema',
    summary: 'Buscar todos os exercícios cadastrados no sistema',
  })
  @ApiResponse({
    schema: {
      description: 'Dados buscados com sucesso',
      example: {
        data: [
          {
            id: 1,
            name: 'Alongamento ergometrico de cabeça pra baixo com o pé na cabeça',
            description: 'Muito foda de fazer',
            knowledge: 'https://www.youtube.com/watch?v=iik25wqIuFo',
          },
        ],
        pages: 10,
        perPage: 50,
        total: 350,
      } as GetManyReturn<ExerciseEntity>,
    },
    status: 200,
  })
  public async findMany(@Query() dto: FindManyExerciseDTO) {
    return await this.service.findMany.execute(dto);
  }
}
