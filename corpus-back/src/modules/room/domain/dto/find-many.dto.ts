import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEmpty } from 'class-validator';
import PaginationDTO from 'src/shared/base/domain/dto/Pagination.dto';

export default class FindManyRoomDTO extends PaginationDTO {
  @ApiPropertyOptional({
    description: 'Nome da sala para realizar a filtragem',
    example: 'Agachamento',
  })
  @IsEmpty()
  public name?: string;

  @ApiPropertyOptional({
    description: 'Flag para definir se a sala está ocupada ou não',
    example: false,
  })
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  public occupied?: boolean;
}
