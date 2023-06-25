import PrismaService from 'src/core/database/app/prisma.service';
import GetExerciseRepository from './class/get-exercise.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class ExerciseRepository {
  public get: GetExerciseRepository;
  public constructor(private readonly prismaService: PrismaService) {
    this.get = new GetExerciseRepository(
      this.prismaService.exercise,
      this.prismaService,
    );
  }
}
