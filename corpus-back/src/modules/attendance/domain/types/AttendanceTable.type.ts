import { Prisma } from '@prisma/client';

export type AttendanceTableType = Prisma.attendancesDelegate<
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation
>;
