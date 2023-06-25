import EmployeeService from 'src/modules/employee/app/service/employee.services';
import EmployeeController from '../../decorators/employee.controller.decorator';
import { Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';
import ViewDoctorEntity from 'src/modules/employee/app/repository/views/entity/ViewDoctor.view';
import FindManyDoctorsDTO from 'src/modules/employee/domain/dto/Find-many-doctors.dto';

@EmployeeController.doctor()
export default class GetDoctorEmployeeController {
  public constructor(private readonly service: EmployeeService) {}

  @Get()
  @ApiOperation({
    description: 'Buscar todos os doutores cadastrados no sistema',
    summary: 'Buscar todos os doutores cadastrados no sistema',
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
            email: 'vitorloch62@gmail.com',
            accessCode: '771615',
          },
        ],
        pages: 10,
        perPage: 50,
        total: 350,
      } as GetManyReturn<ViewDoctorEntity>,
    },
    status: 200,
  })
  public async findMany(@Query() dto: FindManyDoctorsDTO) {
    return await this.service.findManyDoctors.execute(dto);
  }
}
