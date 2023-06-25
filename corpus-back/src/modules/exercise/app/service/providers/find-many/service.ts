import FindManyExerciseDTO from 'src/modules/exercise/domain/dto/find-many.dto';
import ExerciseRepository from '../../../repository/exercise.repository';
import FindManyExerciseFunctionality from './functionality';

export default class FindManyExerciseService extends FindManyExerciseFunctionality {
  public constructor(private readonly repository: ExerciseRepository) {
    super(repository);
  }
  public async execute(dto: FindManyExerciseDTO) {
    return await this.getAllExercises(dto.name, dto.max, dto.page);
  }
}
