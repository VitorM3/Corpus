import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmpty } from 'class-validator';
import PaginationDTO from 'src/shared/base/domain/dto/Pagination.dto';

export default class FindManyInventoryDTO extends PaginationDTO {
  @ApiPropertyOptional({
    description: 'Nome do item no estoque para realizar a filtragem',
    example: 'Bandeide',
  })
  @IsEmpty()
  public name: string;
}
