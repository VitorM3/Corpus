import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmpty } from 'class-validator';
import PaginationDTO from 'src/shared/base/domain/dto/Pagination.dto';

export default class FindManyExerciseDTO extends PaginationDTO {
  @ApiPropertyOptional({
    description: 'Nome do exercício para realizar a filtragem',
    example: 'Agachamento',
  })
  @IsEmpty()
  public name: string;
}
