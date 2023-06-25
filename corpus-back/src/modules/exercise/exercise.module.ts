import { Module } from '@nestjs/common';
import ExerciseRepository from './app/repository/exercise.repository';
import ExerciseService from './app/service/exercise.service';
import ExerciseRoutes from './routes/exercise.routes';

@Module({
  providers: [ExerciseRepository, ExerciseService],
  controllers: [...ExerciseRoutes],
  exports: [ExerciseService],
})
export default class ExerciseModule {}
