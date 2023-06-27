import { Prisma } from '@prisma/client';

export type AttendanceFindAllViewType = Prisma.attendance_reportDelegate<
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation
>;
