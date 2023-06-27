import { ApiPropertyOptional } from '@nestjs/swagger';
import PaginationDTO from 'src/shared/base/domain/dto/Pagination.dto';

export default class FindManyAttendanceDTO extends PaginationDTO {
  @ApiPropertyOptional({
    description: 'Nome do paciente',
  })
  public namePacient: string;

  @ApiPropertyOptional({
    description: 'Nome do doutor',
  })
  public nameDoctor: string;

  @ApiPropertyOptional({
    description: 'Pesquisar por atendimento ativo ou inativo',
  })
  public status: boolean;
}
