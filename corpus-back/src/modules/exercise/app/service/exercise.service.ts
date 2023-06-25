import { Injectable } from '@nestjs/common';
import FindManyExerciseService from './providers/find-many/service';
import ExerciseRepository from '../repository/exercise.repository';

@Injectable()
export default class ExerciseService {
  public findMany: FindManyExerciseService;
  public constructor(private readonly repository: ExerciseRepository) {
    this.findMany = new FindManyExerciseService(this.repository);
  }
}
