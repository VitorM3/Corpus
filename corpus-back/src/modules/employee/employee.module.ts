import { Module } from '@nestjs/common';
import EmployeeRepository from './app/repository/employee.repository';
import EmployeeService from './app/service/employee.services';
import employeeRoutes from './routes/employee.routes';

@Module({
  providers: [EmployeeRepository, EmployeeService],
  controllers: [...employeeRoutes],
  exports: [EmployeeService],
})
export default class EmployeeModule {}
