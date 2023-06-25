import { Injectable } from '@nestjs/common';
import ViewEmployee from './views/ViewEmployee.view';
import PrismaService from 'src/core/database/app/prisma.service';

@Injectable()
export default class EmployeeRepository {
  public views: ViewEmployee;

  public constructor(private readonly prismaService: PrismaService) {
    this.views = new ViewEmployee(this.prismaService);
  }
}
