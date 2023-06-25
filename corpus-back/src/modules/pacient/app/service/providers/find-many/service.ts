import FindManyPacientDTO from 'src/modules/pacient/domain/dto/find-many.dto';
import PacientRepository from '../../../repository/pacient.repository';
import FindManyPacientFunctionality from './functionality';

export default class FindManyPacientService extends FindManyPacientFunctionality {
  public constructor(private readonly pacientRepository: PacientRepository) {
    super(pacientRepository);
  }

  public async execute(dto: FindManyPacientDTO) {
    return await this.getPacientOfDatabase(dto.name, dto.max, dto.page);
  }
}
