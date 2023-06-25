import { Get, Query } from '@nestjs/common';
import PacientController from '../../decorator/Pacient.controller.decorator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import PacientService from 'src/modules/pacient/app/service/pacient.service';
import FindManyPacientDTO from 'src/modules/pacient/domain/dto/find-many.dto';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';
import ViewPacientEntity from 'src/modules/pacient/app/repository/view/entity/ViewPacient.view.entity';

@PacientController.default()
export default class GetPacientController {
  public constructor(private readonly service: PacientService) {}
  @Get()
  @ApiOperation({
    description: 'Buscar todos os pacientes cadastrados no sistema',
    summary: 'Buscar todos os pacientes cadastrados no sistema',
  })
  @ApiResponse({
    schema: {
      description: 'Dados buscados com sucesso',
      example: {
        data: [
          {
            id: 1,
            name: 'Vitor Loch',
            cpf: '0000000000',
            companyCode: '00000000000',
            email: 'vitorloch62@gmail.com',
            phone: '48996196725',
            phoneAlternative: '48996196725',
            susCode: '111111111111',
          },
        ],
        pages: 10,
        perPage: 50,
        total: 350,
      } as GetManyReturn<ViewPacientEntity>,
    },
    status: 200,
  })
  public async findMany(@Query() dto: FindManyPacientDTO) {
    return await this.service.findMany.execute(dto);
  }
}
