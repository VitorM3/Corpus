import ExerciseRepository from '../../../repository/exercise.repository';

export default class FindManyExerciseFunctionality {
  public constructor(
    private readonly exercisesRepository: ExerciseRepository,
  ) {}

  protected async getAllExercises(name: string, max: number, page: number) {
    return await this.exercisesRepository.get.many({
      max,
      page,
      where: {
        name,
      },
    });
  }
}
