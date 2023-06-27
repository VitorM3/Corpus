import { ApiProperty } from '@nestjs/swagger';
import PaginationDTO from 'src/shared/base/domain/dto/Pagination.dto';

export default class FindManyAttendanceDTO extends PaginationDTO {
  @ApiProperty({
    description: 'Nome do paciente',
  })
  public namePacient: string;

  @ApiProperty({
    description: 'Nome do doutor',
  })
  public nameDoctor: string;

  @ApiProperty({
    description: 'Pesquisar por atendimento ativo ou inativo',
  })
  public status: boolean;
}
