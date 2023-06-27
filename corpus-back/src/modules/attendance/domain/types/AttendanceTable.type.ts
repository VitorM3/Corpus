import { Prisma } from '@prisma/client';

export type AttendanceTableType = Prisma.attendance_reportDelegate<
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation
>;
