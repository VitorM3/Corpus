import { Injectable } from '@nestjs/common';
import FindManyDoctorsService from './providers/find-many-doctors/services';
import EmployeeRepository from '../repository/employee.repository';

@Injectable()
export default class EmployeeService {
  public findManyDoctors: FindManyDoctorsService;
  public constructor(private readonly employeeRepository: EmployeeRepository) {
    this.findManyDoctors = new FindManyDoctorsService(this.employeeRepository);
  }
}
