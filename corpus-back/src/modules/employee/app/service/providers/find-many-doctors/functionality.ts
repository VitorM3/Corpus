import EmployeeRepository from '../../../repository/employee.repository';

export default class FindManyDoctorsFunctionality {
  public constructor(private readonly employeeRepository: EmployeeRepository) {}

  protected async getManyDoctors(name: string, max: number, page: number) {
    return await this.employeeRepository.views.doctor.many({
      max,
      page,
      where: {
        name,
      },
    });
  }
}
