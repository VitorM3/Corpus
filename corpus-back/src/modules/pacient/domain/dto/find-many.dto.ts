import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import PaginationDTO from 'src/shared/base/domain/dto/Pagination.dto';

export default class FindManyPacientDTO extends PaginationDTO {
  @ApiPropertyOptional({
    description: 'Nome do usuário para realizar a filtragem',
    example: 'Vitor Loch',
  })
  @IsString()
  public name: string;
}
