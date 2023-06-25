import { Prisma } from '@prisma/client';

export type ExerciseTableType = Prisma.exerciseDelegate<
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation
>;
