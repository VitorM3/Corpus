import FindManyDoctorsDTO from 'src/modules/employee/domain/dto/Find-many-doctors.dto';
import EmployeeRepository from '../../../repository/employee.repository';
import FindManyDoctorsFunctionality from './functionality';

export default class FindManyDoctorsService extends FindManyDoctorsFunctionality {
  public constructor(private readonly repository: EmployeeRepository) {
    super(repository);
  }
  public async execute(dto: FindManyDoctorsDTO) {
    return await this.getManyDoctors(dto.name, dto.max, dto.page);
  }
}
