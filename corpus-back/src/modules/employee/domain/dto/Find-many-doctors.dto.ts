import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmpty } from 'class-validator';
import PaginationDTO from 'src/shared/base/domain/dto/Pagination.dto';

export default class FindManyDoctorsDTO extends PaginationDTO {
  @ApiPropertyOptional({
    description: 'Nome do usuário para realizar a filtragem',
    example: 'Vitor Loch',
  })
  @IsEmpty()
  public name: string;
}
